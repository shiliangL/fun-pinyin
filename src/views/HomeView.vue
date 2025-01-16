<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Mock progress data
const progress = ref({
  percentage: 65,
  completed: 42,
  total: 65
})

// Mock achievement badges
const badges = ref([
  { id: 1, name: '拼音小能手', icon: '🏆', unlocked: true },
  { id: 2, name: '声母大师', icon: '🎖️', unlocked: true },
  { id: 3, name: '韵母专家', icon: '🏅', unlocked: false }
])

// Mock statistics
const stats = ref({
  learningDays: 12,
  correctRate: 85,
  collectedCards: 38
})

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Progress Section -->
    <section class="bg-white rounded-lg shadow p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">学习进度</h2>
      <div class="flex items-center space-x-4">
        <div class="w-full bg-gray-200 rounded-full h-4">
          <div
            class="bg-gradient-to-r from-primary-400 to-primary-600 h-4 rounded-full"
            :style="{ width: `${progress.percentage}%` }"
          ></div>
        </div>
        <span class="text-sm font-medium">
          {{ progress.completed }}/{{ progress.total }}
        </span>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="bg-white rounded-lg shadow p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">成就徽章</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="badge in badges"
          :key="badge.id"
          class="p-4 rounded-lg text-center"
          :class="{
            'bg-primary-50': badge.unlocked,
            'bg-gray-100': !badge.unlocked
          }"
        >
          <div class="text-4xl mb-2">{{ badge.icon }}</div>
          <div class="text-sm">{{ badge.name }}</div>
        </div>
      </div>
    </section>

    <!-- Function Cards Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
        @click="navigateTo('/learn')"
      >
        <div class="text-3xl text-primary-600 mb-2">📚</div>
        <h3 class="text-lg font-bold mb-2">拼音学习</h3>
        <p class="text-sm text-gray-600">已学习 {{ stats.learningDays }} 天</p>
      </div>

      <div
        class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
        @click="navigateTo('/test')"
      >
        <div class="text-3xl text-primary-600 mb-2">📝</div>
        <h3 class="text-lg font-bold mb-2">拼音测试</h3>
        <p class="text-sm text-gray-600">正确率 {{ stats.correctRate }}%</p>
      </div>

      <div
        class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
        @click="navigateTo('/collections')"
      >
        <div class="text-3xl text-primary-600 mb-2">❤️</div>
        <h3 class="text-lg font-bold mb-2">我的收藏</h3>
        <p class="text-sm text-gray-600">{{ stats.collectedCards }} 个收藏</p>
      </div>

      <div
        class="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow cursor-pointer"
        @click="navigateTo('/reports')"
      >
        <div class="text-3xl text-primary-600 mb-2">📊</div>
        <h3 class="text-lg font-bold mb-2">学习报告</h3>
        <p class="text-sm text-gray-600">查看详细数据</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Custom styles if needed */
</style>
