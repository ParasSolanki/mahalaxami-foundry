import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react(), image()],
  site: 'https://parassolanki.github.io',
  base: '/mahalaxami-foundry',
})
