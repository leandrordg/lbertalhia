import { client } from "@/database/apollo-client";
import { getFormatedLocale } from "@/hooks/get-formated-locale";
import { GET_SOCIALS } from "@/models/get-socials";

export async function getSocials(): Promise<Social[]> {
  const locale = getFormatedLocale();

  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_SOCIALS,
    variables: { locale },
  });

  return data.socials;
}
