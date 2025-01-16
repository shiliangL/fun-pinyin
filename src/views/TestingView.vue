<script setup>
import { ref, computed } from 'vue'
import { usePinyinStore } from '@/stores/pinyin'
import PinyinCard from '@/components/PinyinCard.vue'
import { Howl } from 'howler'
import { gsap } from 'gsap'

const pinyinStore = usePinyinStore()
const testCards = ref(pinyinStore.getRandomCards(10))
const currentIndex = ref(0)
const showAnswer = ref(false)
const isCorrect = ref(false)
const testResults = ref([])
const correctSound = new Howl({ src: ['/sounds/correct.mp3'] })
const wrongSound = new Howl({ src: ['/sounds/wrong.mp3'] })

const currentCard = computed(() => testCards.value[currentIndex.value])
const progress = computed(() => ((currentIndex.value + 1) / testCards.value.length) * 100)
const accuracy = computed(() => {
  const correctCount = testResults.value.filter(r => r).length
  return Math.round((correctCount / testResults.value.length) * 100)
})

const playAudio = () => {
  const sound = new Howl({
    src: [currentCard.value.audio],
    volume: 0.8
  })
  sound.play()
}

const checkAnswer = () => {
  showAnswer.value = true
  // TODO: Implement actual answer checking logic
  isCorrect.value = true // Placeholder

  // Play feedback sound
  if (isCorrect.value) {
    correctSound.play()
    gsap.to('.pinyin-card', {
      scale: 1.05,
      yoyo: true,
      repeat: 1,
      duration: 0.2,
      ease: 'power2.out'
    })
  } else {
    wrongSound.play()
    gsap.to('.pinyin-card', {
      x: [0, 10, -10, 0],
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  // Animate answer section
  gsap.from('.answer-section', {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: 'back.out(1.7)'
  })

  // Record result
  testResults.value.push(isCorrect.value)
}

const nextCard = () => {
  showAnswer.value = false
  isCorrect.value = false
  currentIndex.value = (currentIndex.value + 1) % testCards.value.length
  gsap.from('.pinyin-card', {
    opacity: 0,
    x: -20,
    duration: 0.3
  })
}

const finishTest = () => {
  // Calculate final results
  const correctCount = testResults.value.filter(r => r).length
  const totalQuestions = testCards.value.length
  const accuracy = Math.round((correctCount / totalQuestions) * 100)

  // Show results summary
  alert(`Test completed!\nCorrect: ${correctCount}/${totalQuestions}\nAccuracy: ${accuracy}%`)

  // Reset test state
  testCards.value = pinyinStore.getRandomCards(10)
  currentIndex.value = 0
  showAnswer.value = false
  isCorrect.value = false
  testResults.value = []

  // Animate reset
  gsap.from('.pinyin-card', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'back.out(1.7)'
  })
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Progress Indicator -->
    <div class="mb-8">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm text-primary-600">
          Question {{ currentIndex + 1 }} of {{ testCards.length }}
        </span>
        <button
          class="btn-secondary"
          @click="finishTest"
        >
          Finish Test
        </button>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div
          class="bg-primary-600 h-2.5 rounded-full"
          :style="`width: ${((currentIndex + 1) / testCards.length) * 100}%`"
        ></div>
      </div>
    </div>

    <!-- Test Card -->
    <div class="flex flex-col items-center">
      <div
        class="pinyin-card w-full max-w-md cursor-pointer"
        @click="playAudio"
      >
        <PinyinCard :pinyin="currentCard" />
      </div>

      <!-- Answer Section -->
      <div v-if="showAnswer" class="answer-section mt-8 w-full max-w-md">
        <div
          class="p-6 rounded-lg"
          :class="{
            'bg-green-100': isCorrect,
            'bg-red-100': !isCorrect
          }"
        >
          <h3 class="text-xl font-cute mb-4">Examples</h3>
          <ul class="text-center">
            <li
              v-for="(example, index) in currentCard.examples"
              :key="index"
              class="text-primary-600"
            >
              {{ example }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Controls -->
      <div class="mt-8 flex gap-4">
        <button
          v-if="!showAnswer"
          class="btn-primary"
          @click="checkAnswer"
        >
          Show Answer
        </button>
        <button
          class="btn-primary"
          @click="nextCard"
        >
          Next Card
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors;
}

.btn-secondary {
  @apply px-4 py-1 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors;
}
</style>
