<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePinyinStore } from '@/stores/pinyin'
import PinyinCard from '@/components/PinyinCard.vue'
import { gsap } from 'gsap'
import { Howl } from 'howler'

const pinyinStore = usePinyinStore()
const activeCard = ref(null)
const isLoading = ref(true)
const error = ref(null)
const searchQuery = ref('')
const activeTab = ref(0)

const tabs = [
  { label: '声母', value: 'initials' },
  { label: '韵母', value: 'finals' },
  { label: '音节', value: 'syllables' }
]

// Get categorized cards
const initials = computed(() => pinyinStore.initials)
const finals = computed(() => pinyinStore.finals)
const syllables = computed(() => pinyinStore.syllables)

// Filtered cards
const filteredCards = (cards) => {
  if (!searchQuery.value) return cards
  return cards.filter(card =>
    card.pinyin.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    card.examples.some(example =>
      example.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
}

onMounted(async () => {
  try {
    await pinyinStore.loadPinyinData()
    isLoading.value = false
  } catch (err) {
    error.value = err.message
    isLoading.value = false
  }
})

const handleCardClick = (card) => {
  if (activeCard.value) {
    // Animate current active card back to grid
    gsap.to(`#card-${activeCard.value.id}`, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        activeCard.value = null
      }
    })
  }

  if (activeCard.value?.id !== card.id) {
    // Animate clicked card to center
    activeCard.value = card
    gsap.to(`#card-${card.id}`, {
      scale: 1.5,
      duration: 0.3,
      ease: 'power2.out'
    })

    // Play audio
    const sound = new Howl({
      src: [card.audio],
      volume: 0.8
    })
    sound.play()
  }
}
</script>

<template>
    <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
    <!-- Search Section -->
    <section class="mb-2">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索拼音或例词..."
            class="w-full sm:flex-1 px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base transition-all"
          />
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="p-2.5 text-gray-500 hover:text-primary-700 transition-colors text-lg"
          >
            &times;
          </button>
        </div>
        <h2 class="text-xl font-cute text-primary-900 mb-4">学习进度</h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div class="text-center p-4 sm:p-5 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
            <div class="text-2xl sm:text-3xl font-cute text-primary-700">
              {{ pinyinStore.initials.length }}
            </div>
            <div class="text-xs sm:text-sm text-primary-600 mt-1">声母</div>
          </div>
          <div class="text-center p-4 sm:p-5 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
            <div class="text-2xl sm:text-3xl font-cute text-primary-700">
              {{ pinyinStore.finals.length }}
            </div>
            <div class="text-xs sm:text-sm text-primary-600 mt-1">韵母</div>
          </div>
          <div class="text-center p-4 sm:p-5 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
            <div class="text-2xl sm:text-3xl font-cute text-primary-700">
              {{ pinyinStore.syllables.length }}
            </div>
            <div class="text-xs sm:text-sm text-primary-600 mt-1">音节</div>
          </div>
          <div class="text-center p-4 sm:p-5 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
            <div class="text-2xl sm:text-3xl font-cute text-primary-700">
              {{ pinyinStore.collectedCards.length }}
            </div>
            <div class="text-xs sm:text-sm text-primary-600 mt-1">收藏</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Loading and Error States -->
    <div v-if="isLoading" class="text-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
      <p class="mt-4 text-primary-700">加载中...</p>
    </div>

    <div v-else-if="error" class="bg-red-50 p-6 rounded-lg text-red-700">
      <p>加载失败: {{ error }}</p>
      <button
        @click="pinyinStore.loadPinyinData()"
        class="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
      >
        重试
      </button>
    </div>

    <template v-else>
      <!-- Tabs Navigation -->
      <div class="flex justify-center space-x-4 mb-2 p-2 bg-white rounded-lg shadow-md">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-pink-300',
            activeTab === index
              ? 'text-pink-700 bg-pink-100 shadow-sm'
              : 'text-gray-500 hover:text-pink-600 hover:bg-pink-50'
          ]"
        >
          {{ tab.label }}
          <span
            v-if="activeTab === index"
            class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-pink-300 rounded-full"
          ></span>
        </button>
      </div>

      <!-- Tabs Content -->
      <div class="overflow-hidden">
        <!-- Initials Tab -->
        <transition
          v-if="activeTab === 0"
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-show="activeTab === 0" class="p-0">
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-4">
            <div
              v-for="card in filteredCards(initials)"
              :key="card.id"
              :id="`card-${card.id}`"
              @click="handleCardClick(card)"
            >
              <PinyinCard :pinyin="card" />
            </div>
          </div>
        </div>
        </transition>

        <!-- Finals Tab -->
        <transition
          v-if="activeTab === 1"
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-show="activeTab === 1" class="p-0">
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-4">
            <div
              v-for="card in finals"
              :key="card.id"
              :id="`card-${card.id}`"
              @click="handleCardClick(card)"
            >
              <PinyinCard :pinyin="card" />
            </div>
          </div>
        </div>
        </transition>

        <!-- Syllables Tab -->
        <transition
          v-if="activeTab === 2"
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-show="activeTab === 2" class="p-0">
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-4">
            <div
              v-for="card in filteredCards(syllables)"
              :key="card.id"
              :id="`card-${card.id}`"
              @click="handleCardClick(card)"
            >
              <PinyinCard :pinyin="card" />
            </div>
          </div>
        </div>
        </transition>
      </div>
    </template>
  </div>
</template>

<style scoped>
.font-cute {
  font-family: 'Comic Sans MS', cursive, sans-serif;
}
</style>
