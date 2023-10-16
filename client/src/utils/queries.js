import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  {
    user {
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
      likes
      matches
      inmate {
        releaseDate
        crime
        pastConvictions
      }
      preference {
        sex
        wanted
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
