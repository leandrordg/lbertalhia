import { gql } from "@apollo/client";

export const GET_POSTS_BY_SLUG = gql`
  query GetPosts($slug: String!, $locale: Locale!) {
    posts(where: { slug: $slug }, locales: [$locale]) {
      id
      title
      slug
      description
      content
      readingTime
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
