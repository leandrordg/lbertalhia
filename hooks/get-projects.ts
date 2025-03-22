import { client } from "@/database/apollo-client";
import { getFormatedLocale } from "@/hooks/get-formated-locale";
import { GET_PROJECTS } from "@/models/get-projects";

export async function getProjects(): Promise<ProjectWithRelations[]> {
  const locale = getFormatedLocale();

  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_PROJECTS,
    variables: { locale },
  });

  return data.projects;
}
