import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users {
  users {
    email
    age
    _id
    description
    isInmate
    location
    profilePic
    password
    sex
    username
    preference {
      sex
      wanted
    }
    inmate {
      crime
      pastConvictions
      releaseDate
    }
    likes {
    _id  
    }
  }
}
`;

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(_id: $userId) {
      _id
      username
      email
      password
      age
      sex
      location
      profilePic
      isInmate
      description
      matches {
        _id
        username
        email
        age
        sex
        location
        profilePic
        isInmate
        description
      }
      likes {
        _id
      }
      inmate {
        _id
        releaseDate
        crime
        pastConvictions
      }
      preference {
        _id
        sex
        wanted
      }
    }
  }
`;

export const QUERY_SHOP_ITEMS = gql`
  {
    shopItems {
      name
      price
      pic
    }
  }
`;
