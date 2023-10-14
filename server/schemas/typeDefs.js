const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    age: Int
    sex: String
    location: String
    profilePic: String
    isInmate: Boolean
    description: String
    matches: [User]
    likes: [User]
    inmate: Inmate
    preference: Preference
  }

  type Inmate {
    _id: ID
    releaseDate: String
    crime: String
    pastConvictions: String
  }

  type Preference {
    _id: ID
    sex: String
    wanted: String
  }

  type ShopItem {
    _id: ID
    name: String
    price: Int
    pic: String
  }

  type Auth {
    token: ID!
    user: User
  }

   type Query {
     user(userId: String!): User
     shopItems: [ShopItem]
   }

   type Mutation {
     addUser(email: String!, password: String!, isInmate: Boolean): Auth
     login(email: String!, password: String!): Auth
     addMatch(userId: String! ): User
     addLikes(userId: String! ): User
     updatePreferences(sex: String, wanted: String ): Preference
     updateInmate(crime: String, pastConvictions: String, releaseDate: String ): Inmate
     updateUser(username: String, age: Int, sex: String, location: String, profilePic: String, description: String): User
  }
`;

module.exports = typeDefs;
