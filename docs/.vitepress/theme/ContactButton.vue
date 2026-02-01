<template>
  <button class="material-contact-button" @click="openChat">
    <span class="vpi-chat menu-icon"></span>
    Contact Support
  </button>
</template>

<script setup>
const openChat = () => {
  if (window.Tawk_API && window.Tawk_API.maximize) {
    window.Tawk_API.maximize();
  } else {
    // Fallback if script hasn't loaded yet
    window.location.href = 'https://tawk.to/chat/5cffe951267b2e578531e177/1i0lolii4';
  }
};
</script>

<style scoped>
.material-contact-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 12px 24px;
  border-radius: 28px;
  font-family: var(--vp-font-family-base);
  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-top: 16px;
}

.material-contact-button:hover {
  background-color: var(--vp-c-brand-2);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.material-contact-button:active {
  background-color: var(--vp-c-brand-3);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu-icon {
  font-size: 24px;
}
</style>
