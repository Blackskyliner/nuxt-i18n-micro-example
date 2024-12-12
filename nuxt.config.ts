// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4
  },
  modules: ['nuxt-i18n-micro'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr', displayName: "English" },
      { code: 'de', iso: 'de-DE', dir: 'ltr', displayName: "German" },
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
  },
  devtools: { enabled: true }
})
