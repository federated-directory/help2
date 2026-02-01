<script setup>
import { ApiReference } from '@scalar/api-reference'
</script>

<template>
  <div class="scalar-api-reference">
    <ApiReference 
      :configuration="{ 
        url: 'https://api.federated.directory/swagger.json',
        theme: 'default',
        hideModels: false
      }" 
    />
  </div>
</template>

<style>
/* Scalar variables to match site theme if needed, though Scalar has its own theming */
</style>
