import { gql } from "@apollo/client";

export const GET_POSTS_BY_SLUG = gql`
  query GetPosts($slug: String!) {
    posts(where: { slug: $slug }) {
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
