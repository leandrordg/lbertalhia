import { gql } from "@apollo/client";

export const GET_SOCIALS = gql`
  query GetSocials {
    socials {
      id
      name
      url
      createdAt
      updatedAt
      image {
        id
        url
        fileName
        createdAt
        updatedAt
      }
    }
  }
`;
