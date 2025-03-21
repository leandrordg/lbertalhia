import { client } from "@/database/apollo-client";
import { GET_PROJECTS } from "@/models/get-projects";

export async function getProjects(): Promise<ProjectWithRelations[]> {
  const { data } = await client.query({
    fetchPolicy: "network-only",
    query: GET_PROJECTS,
  });

  return data.projects;
}
