import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resep = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resep' }),
  schema: z.object({
    title: z.string(),
    kategori: z.enum(['Sarapan', 'Makan Siang', 'Makan Malam', 'Camilan', 'Untuk Anak']),
    produk: z.array(z.string()),
    waktuPrep: z.string(),
    waktuMasak: z.string(),
    porsi: z.string(),
  }),
});

export const collections = { resep };
