import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects($locale: Locale!) {
    projects(locales: [$locale]) {
      id
      name
      slug
      description
      image {
        id
        url
        fileName
        createdAt
        updatedAt
      }
      demo
      sourceCode
      createdAt
      updatedAt
      technologies {
        id
        name
        image {
          id
          url
          fileName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      career {
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
  }
`;
