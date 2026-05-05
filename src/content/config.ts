import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    author:      z.string().default('Hello Web'),
    image:       z.string(),
    imageAlt:    z.string(),
    tags:        z.array(z.string()).default([]),

    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),

    howTo: z.object({
      name: z.string(),
      description: z.string().optional(),
      steps: z.array(z.object({
        name: z.string(),
        text: z.string(),
      })),
    }).optional(),
  }),
});

export const collections = { blog };
