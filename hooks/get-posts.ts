import { client } from "@/database/apollo-client";
import { getFormatedLocale } from "@/hooks/get-formated-locale";
import { GET_POSTS } from "@/models/get-posts";

export async function getPosts(): Promise<PostWithRelations[]> {
  const locale = getFormatedLocale();

  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_POSTS,
    variables: { locale },
  });

  return data.posts;
}
