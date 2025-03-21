import { client } from "@/database/apollo-client";
import { GET_SOCIALS } from "@/models/get-socials";

export async function getSocials(): Promise<Social[]> {
  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_SOCIALS,
  });

  return data.socials;
}
