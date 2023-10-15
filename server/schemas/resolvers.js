const { User, ShopItem } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//adding queries to get users and shop items and mutations to create/update data
const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate("inmate");
        return user;
      }

      throw AuthenticationError;
    },
    shopItems: async () => {
      const shopItems = await ShopItem.findAll();
      return shopItems;
    },
  },
  Mutation: {
    addUser: async (parent, {email, password, isInmate, username, age, sex, location, description}) => {
      const user = await User.create({email, password, isInmate, username, age, sex, location, description});//, releaseDate, crime, pastConvictions });
      console.log("user ", user);
      const token = signToken(user);

      return { token, user };
    },
    addLikes: async (parent, { userId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(context.user._id, { $push: { likes: userId } }, { new: true });
        return updatedUser;
      }
    },
    addMatch: async (parent, context) => {
      if (context.user) {
        var loggedinUser = await User.findById(context.user._id);
        if (loggedinUser.likes) { //distinct
          loggedinUser.likes.forEach(async id => {
            var potentialMatchedUser = await User.findById(id);
            if (potentialMatchedUser.likes.includes(context.user._id && potentialMatchedUser.matches)) {
              const originalUser = await User.findByIdAndUpdate(context.user._id, { $push: { matches: id } }, { new: true });
              const updatedUser = await User.findByIdAndUpdate(id, { $push: { matches: context.user._id } }, { new: true });
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
