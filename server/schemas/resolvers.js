const { User, ShopItem } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//adding queries to get users and shop items and mutations to create/update data
const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        const users = await User.find();
        const user = User.findById(context.user._id );
        console.log("user", user.preference?._id);
        var potentialMatches = users.filter(x => x._id.toString() !== context.user._id);
        return potentialMatches;
      }
    },
    user: async (parent, { _id }) => {
      const user = User.findById({ _id }).populate('matches');
      return user;
    },
    shopItems: async () => {

      const shopItems = await ShopItem.find({});
      return shopItems;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const {email, password, isInmate, username, age, sex, location, description, inmate} = args.input;
      const user = await User.create({email, password, isInmate, username, age, sex, location, description, inmate});//, releaseDate, crime, pastConvictions });
      const token = signToken(user);

      return { token, user };
    },
    addLikes: async (parent, { userId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(context.user._id, { $push: { likes: userId } }, { new: true });
        return updatedUser;
      }
    },
    addMatch: async (parent, { userId }, context) => {
      if (context.user._id) {
        var loggedinUser = await User.findById(context.user._id);
        //get disinst user ID likes
        if (loggedinUser.likes) { 
          loggedinUser.likes.forEach(async id => {
            var potentialMatchedUser = await User.findById(id);
            if (potentialMatchedUser.likes.includes(context.user._id) && !potentialMatchedUser.matches?.includes(context.user._id)) {
              const originalUser = await User.findByIdAndUpdate(context.user._id, { $push: { matches: potentialMatchedUser } }, { new: true });
              const updatedUser = await User.findByIdAndUpdate(id, { $push: { matches: loggedinUser } }, { new: true });
            }
          });
        }
      }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, { $set: { username: args.username, age: args.age, sex: args.sex, location: args.location, profilePic: args.profilePic, description: args.description } }, { new: true });
      }
    },
    updatePreferences: async (parent, args, context) => {
      if (context.user) {
        var updatedInmate = User.findOneAndUpdate({ _id: context.user._id }, {
          $set: {
            preference: {
              sex: args.sex,
              wanted: args.wanted
            }
          }
        }, { new: true });
        return updatedInmate;
      }
    },
    updateInmate: async (parent, args, context) => {
      if (context.user) {
        var updatedInmate = User.findOneAndUpdate({ _id: context.user._id }, {
          $set: {
            inmate: {
              crime: args.crime,
              releaseDate: args.releaseDate,
              pastConvictions: args.pastConvictions
            }
          }
        }, { new: true });
        return updatedInmate;
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
