import { gql } from "@apollo/client";

export const GET_CAREERS = gql`
  query GetCarrers {
    careers {
      id
      name
      description
      company
      employmentType
      location
      image {
        id
        url
        fileName
        createdAt
        updatedAt
      }
      startDate
      endDate
      createdAt
      updatedAt
    }
  }
`;
