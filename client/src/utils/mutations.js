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
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $age: Int!
    $sex: String!
    $location: String!
    $description: String!
    $isInmate: Boolean!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
      age: $age
      sex: $sex
      location: $location
      description: $description
      isInmate: $isInmate
    ) {
      token
      user {
        _id
      }
    }
  }
`;
