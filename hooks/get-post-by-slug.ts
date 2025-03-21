import { client } from "@/database/apollo-client";
import { GET_POSTS_BY_SLUG } from "@/models/get-post-by-slug";

export async function getPostBySlug(
  slug: string
): Promise<PostWithRelations> {
  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_POSTS_BY_SLUG,
    variables: {
      slug,
    },
  });

  return data.posts[0];
}
