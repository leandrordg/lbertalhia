import { gql } from "@apollo/client";

export const GET_CAREERS = gql`
  query GetCarrers($locale: Locale!) {
    careers(locales: [$locale]) {
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
