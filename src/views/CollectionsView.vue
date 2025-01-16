<script setup>
import { computed } from 'vue'
import { usePinyinStore } from '@/stores/pinyin'
import PinyinCard from '@/components/PinyinCard.vue'

const pinyinStore = usePinyinStore()
const collectedCards = computed(() => pinyinStore.collectedCards)
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-cute text-primary-700 mb-8">
      My Collection
    </h1>

    <div v-if="collectedCards.length > 0">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="card in collectedCards"
          :key="card.id"
          class="pinyin-card"
        >
          <PinyinCard :pinyin="card" />
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-xl text-primary-600 mb-4">
        You haven't collected any pinyin cards yet!
      </p>
      <router-link
        to="/learning"
        class="btn-primary"
      >
        Start Learning
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors;
}
</style>
