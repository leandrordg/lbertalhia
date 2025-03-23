import { gql } from "@apollo/client";

export const GET_SOCIALS = gql`
  query GetSocials($locale: Locale!) {
    socials(locales: [$locale], orderBy: createdAt_DESC) {
      id
      name
      url
      type
      createdAt
      updatedAt
    }
  }
`;
