<template>
  <div>
    <h1>{{ t('greeting') }}</h1>
    <p>{{ t('farewell') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#imports'

// Access the $defineI18nRoute function from Nuxt's context
const { $defineI18nRoute, $t: t } = useNuxtApp()

// Define i18n route with translations for specific locales
$defineI18nRoute({
  locales: {
    en: { greeting: 'Hello', farewell: 'Goodbye' },
    de: { greeting: 'Hallo', farewell: 'Auf Wiedersehen' },
  },
})
</script>