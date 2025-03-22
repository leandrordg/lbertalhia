import { client } from "@/database/apollo-client";
import { getFormatedLocale } from "@/hooks/get-formated-locale";
import { GET_CAREERS } from "@/models/get-careers";

export async function getCareers(): Promise<Career[]> {
  const locale = getFormatedLocale();

  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_CAREERS,
    variables: { locale },
  });

  return data.careers;
}
