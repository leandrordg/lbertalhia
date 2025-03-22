import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($locale: Locale!) {
    posts(locales: [$locale]) {
      id
      title
      slug
      description
      content
      image {
        id
        url
        fileName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      tags {
        id
        name
      }
    }
  }
`;
