import { gql } from '@apollo/client';
//import {Inmate} from "../../../server/models";

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
    $username: String
    $email: String!
    $password: String!
    $age: Int
    $sex: String
    $location: String
    $description: String
    $isInmate: Boolean!
    #$inmate: Inmate()
  ) {
    addUser(
      username: $username
      password: $password
      email: $email
      age: $age
      sex: $sex
      location: $location
      description: $description
      isInmate: $isInmate
      #inmate: {$inmate}
    ) {
      token
      user {
        _id
      }
    }
  }
`;
