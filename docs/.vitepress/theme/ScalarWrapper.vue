<script setup>
import { ApiReference } from '@scalar/api-reference'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

const configuration = computed(() => ({
  spec: { url: '/swagger.json' },
  theme: 'default',
  hideModels: false,
  darkMode: isDark.value,
  withDefaultFonts: false // We use our own font in custom.css
}))
</script>

<template>
  <div class="scalar-api-reference">
    <ApiReference :configuration="configuration" />
  </div>
</template>

<style>
/* Scalar variables to match site theme if needed, though Scalar has its own theming */
</style>
