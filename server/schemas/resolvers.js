const { User, ShopItem } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//adding queries to get users and shop items and mutations to create/update data
const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        const users = await User.find();
        const user = await User.findById(context.user._id );
        var potentialMatches = users.filter(x => x._id.toString() !== context.user._id && x.isInmate === !user.isInmate);
        return potentialMatches;
      }
    },
    user: async (parent, { id }, context) => {
      const user = await User.findById(context.user._id).populate('matches');
      return user;
    },
    shopItems: async () => {

      const shopItems = await ShopItem.find({});
      return shopItems;
    },
  },
  Mutation: {
    addUser: async (parent, {input}) => {
      const {email, password, isInmate, username, sex, location, description, profilePic, inmate} = input;
      const user = await User.create({email, password, isInmate, username, sex, location, description, profilePic, inmate});
      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent,{userId}, context) => {
      if(userId){
        return await User.findByIdAndDelete(userId);
      }
    },
    addLikes: async (parent, { userId }, context) => {
      //when a user clicks thumbs up then we add a like
      //add matches mutation is run directly after to add potential match
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
    updateUser: async (parent, {input}, context) => {
      const {username, age, sex, location, description, profilePic} = input;
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, { $set: { username, age, sex, location, profilePic, description } }, { new: true });
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
