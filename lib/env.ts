import { z } from "zod";

const envSchema = z.object({
  HYGRAPH_API_KEY: z.string(),
  HYGRAPH_AUTH_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);
