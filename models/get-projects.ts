import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      slug
      description
      tags
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
    }
  }
`;
