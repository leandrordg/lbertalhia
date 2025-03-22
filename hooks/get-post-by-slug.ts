import { client } from "@/database/apollo-client";
import { getFormatedLocale } from "@/hooks/get-formated-locale";
import { GET_POSTS_BY_SLUG } from "@/models/get-post-by-slug";

export async function getPostBySlug(slug: string): Promise<PostWithRelations> {
  const locale = getFormatedLocale();

  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_POSTS_BY_SLUG,
    variables: {
      slug,
      locale,
    },
  });

  return data.posts[0];
}
