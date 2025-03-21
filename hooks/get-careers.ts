import { client } from "@/database/apollo-client";
import { GET_CAREERS } from "@/models/get-careers";

export async function getCareers(): Promise<Career[]> {
  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_CAREERS,
  });

  return data.careers;
}
