import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
})

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
}
