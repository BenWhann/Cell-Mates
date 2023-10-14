import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      email
      age
      sex
      location
      profilePic
      description
      isInmate {
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
