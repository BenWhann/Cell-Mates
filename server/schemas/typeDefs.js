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
    inmate: Boolean
    description: String
    matches: [User]
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
    crime: String
    sentenceTime: String
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
     preferences(userId: ID!): [Preference]
     inmate(userId: ID!): [Inmate]
     shopItem(shopId: ID!): ShopItem
   }

   type Mutation {
     addUser(email: String!, password: String!): Auth
     login(email: String!, password: String!): Auth
     addMatch(products: [ID]!): Order
  #   # addThought(thoughtText: String!, thoughtAuthor: String!): Thought
  #   # addComment(
  #   #   thoughtId: ID!
  #   #   commentText: String!
  #   #   commentAuthor: String!
  #   # ): Thought
  #   # removeThought(thoughtId: ID!): Thought
  #   # removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
