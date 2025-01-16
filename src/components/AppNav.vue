<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: 'home'
  },
  {
    name: 'Learning',
    path: '/learning',
    icon: 'book'
  },
  {
    name: 'Testing',
    path: '/testing',
    icon: 'quiz'
  },
  {
    name: 'Collections',
    path: '/collections',
    icon: 'favorite'
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: 'analytics'
  }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-primary-500 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <div  class="h-8 mr-2">
          </div>
          <span class="text-white text-xl font-cute">Fun Pinyin</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="text-white hover:bg-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-white hover:text-primary-100 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-600"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply bg-primary-700;
}
</style>
