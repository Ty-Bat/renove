import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      location: z.string(),
      category: z.string(),
      completion: z.string(),
      featured: z.boolean().default(false),
      featuredOrder: z.number().default(99),
      scope: z.array(z.string()),
      heroImage: image(),
      heroAlt: z.string(),
      beforeImages: z.array(image()).default([]),
      afterImages: z.array(image()).default([]),
      galleryImages: z.array(image()).default([]),
      photoGroups: z
        .array(
          z.object({
            label: z.string(),
            title: z.string(),
            text: z.string(),
            images: z.array(image()).min(1),
          }),
        )
        .default([]),
      primaryTone: z.string().default('clay'),
      results: z.array(z.string()),
    }),
});

export const collections = { projects };
