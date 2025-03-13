<script setup lang="ts">
import { useAuthStore } from './store/auth';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const authStore = useAuthStore();
const route = useRoute();

const showNavigation = computed(() => {
  // Don't show navigation on login page
  return route.name !== 'login';
});
</script>

<template>
  <div class="app-container">
    <!-- Main content -->
    <main :class="{ 'auth-layout': !showNavigation }">
      <router-view />
    </main>
  </div>
</template>

<style>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #FF7A00;
  --primary-hover: #e66e00;
  --secondary-color: #000000;
  --accent-color: #FFB366;
  --text-color: #333333;
  --background-color: #F5F5F5;
  --white: #FFFFFF;
  --error-color: #dc3545;
  --success-color: #28a745;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Auth pages layout (login, register, etc.) */
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: var(--background-color);
}

/* Common utility classes */
.text-center {
  text-align: center;
}

.error-text {
  color: var(--error-color);
}

.success-text {
  color: var(--success-color);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive breakpoints */
@media (max-width: 768px) {
  .app-container {
    padding: 0;
  }
}
</style>
