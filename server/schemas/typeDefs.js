//defining our type defs here - our models, mutations, and queries defined in the resolver
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

  type Matches {
    users: [User]
  }

  input AddUserInput {
    _id: ID
    username: String
    email: String!
    password: String!
    age: Int
    sex: String
    location: String
    profilePic: String
    isInmate: Boolean!
    description: String
    inmate: InmateInput
  }

  input InmateInput {
    _id: ID
    releaseDate: String
    crime: String
    pastConvictions: String
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
     user(_id: ID!): User
     users: [User]
     shopItems: [ShopItem]!
   }

   type Mutation {
     addUser(input: AddUserInput): Auth
     login(email: String!, password: String!): Auth
     addMatch(userId: String ): User
     addLikes(userId: String! ): User
     updatePreferences(sex: String, wanted: String ): Preference
     updateInmate(crime: String, pastConvictions: String, releaseDate: String ): Inmate
     updateUser(username: String, age: Int, sex: String, location: String, profilePic: String, description: String): User
  }
`;

module.exports = typeDefs;
