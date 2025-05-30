// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

 build: {
    transpile: ['vuetify'],
  },
modules: ['@nuxt/fonts', '@nuxt/eslint', (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    // hot reload
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
fonts: {
    families: [
      { name: "THSarabunPSK", provider: "custom" },
      { name: "Kanit", provider: "custom" },
      { name: "Noto Sans Thai", provider: "google" },
      { name: "Sarabun", provider: "google" },
      { name: "Roboto", provider: "google" }
    ],

    defaults: {
      fallbacks: {
        "sans-serif": ["Roboto", "THSarabunPSK", "Noto Sans Thai", "Sarabun"],
        serif: ["Roboto", "THSarabunPSK", "Noto Sans Thai", "Sarabun"],
        monospace: ["Roboto", "THSarabunPSK", "Noto Sans Thai", "Sarabun"],
      },
      preload: true,
    }
  },



  srcDir: './src',
   ssr: false,

})
