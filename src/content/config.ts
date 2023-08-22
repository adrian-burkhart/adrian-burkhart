import { z, defineCollection } from "astro:content"

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string(),
    techStack: z.array(z.string()),
    link: z.string(),
    image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),
  }),
})

export const collections = {
  projects: projectsCollection,
}
