<script setup>
import { RouterView } from 'vue-router'
import AppNav from '@/components/AppNav.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <AppNav />

    <!-- Main Content -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-primary-50 py-4 mt-8">
      <div class="container mx-auto px-4 text-center text-primary-900">
        <p class="text-sm">© 2024 Fun Pinyin. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Global transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
