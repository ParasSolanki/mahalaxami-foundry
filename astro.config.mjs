import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'

const baseUrl =
  process.env.NODE_ENV === 'production' ? 'mahalaxami-foundry/' : '/'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  site: 'https://parassolanki.github.io',
  base: baseUrl,
})
