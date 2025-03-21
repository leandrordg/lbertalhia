import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      slug
      date
      content
      tags
      coverImage {
        id
        url
        fileName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
