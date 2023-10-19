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
    token
    user {
      email
      password
      isInmate
      username
      location
      description
      sex
      profilePic
      inmate {
        crime
        pastConvictions
        releaseDate
      }
    }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($userId: String) {
    deleteUser(userId: $userId) {
      _id
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
