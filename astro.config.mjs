import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'

const baseUrl =
  import.meta.env.MODE === 'production' ? '/mahalaxami-foundry' : '/'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  site: 'https://parassolanki.github.io',
  base: baseUrl,
})
