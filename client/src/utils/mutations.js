import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($input: AddUserInput) {
  addUser(input: $input) {
    user {
      age
      _id
      description
      email
      isInmate
      location
      password
      profilePic
      sex
      username
      inmate {
        crime
        pastConvictions
        releaseDate
      }
    }
    }
  }
`;

export const ADD_LIKES = gql`
  mutation addLikes($userId: String!) {
    addLikes(userId: $userId) {
      _id
    }
  }
`;

export const ADD_MATCH = gql`
  mutation addMatch($userId: String) {
    addMatch(userId: $userId) {
      _id
    }
  }
`;
