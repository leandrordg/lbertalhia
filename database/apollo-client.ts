import { env } from "@/lib/env";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ uri: env.HYGRAPH_API_KEY }),
  cache: new InMemoryCache(),
});
