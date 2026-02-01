---
layout: page
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Dynamically load the Scalar script
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference'
  script.type = 'module'
  document.body.appendChild(script)
})
</script>

<div class="scalar-app-container">
  <scalar-api-reference 
    data-url="https://api.federated.directory/swagger.json"
    data-proxy-url="https://proxy.scalar.com">
  </scalar-api-reference>
</div>

<style>
/* Override VitePress container to give Scalar more space */
.VPDoc { 
  padding: 0 !important; 
  width: 100% !important;
  max-width: 100% !important;
}
.container {
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
.scalar-app-container {
  height: 100vh;
  width: 100%;
}
</style>
