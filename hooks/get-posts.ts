import { client } from "@/database/apollo-client";
import { GET_POSTS } from "@/models/get-posts";

export async function getPosts(): Promise<PostWithRelations[]> {
  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_POSTS,
  });

  return data.posts;
}
