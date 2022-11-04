// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'

import GithubActionsReporter from 'vitest-github-actions-reporter'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  base: process.env.GH_BUILD ? '/EX-WebThrottle2/' : '/',
  test: {
    reporters: 
              process.env.GITHUB_ACTIONS
              ? ['default', new GithubActionsReporter()]
              // ? ['html']
              : ['default'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json']
    },
    deps: {
      external: ["vuetify"],
      inline: ["vuetify"]
    }
  }
})