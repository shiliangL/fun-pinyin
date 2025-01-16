<script setup>
import { ref } from 'vue'
import { Howl } from 'howler'
import { usePinyinStore } from '@/stores/pinyin'

const props = defineProps({
  pinyin: {
    type: Object,
    required: true,
  },
})

const pinyinStore = usePinyinStore()
const isFlipped = ref(false)
const isBouncing = ref(false)

const playAudio = () => {
  const sound = new Howl({
    src: [props.pinyin.audio],
    volume: 0.8,
  })
  sound.play()
}

const toggleCollection = () => {
  pinyinStore.toggleCollection(props.pinyin.id)
}

const handleClick = () => {
  isBouncing.value = true
  setTimeout(() => {
    isFlipped.value = !isFlipped.value
    isBouncing.value = false
  }, 300)
}
</script>

<template>
  <div
    class="card h-[380px] sm:h-[400px] bg-white rounded-2xl shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    :class="{ 'ring-4 ring-primary-500/50': pinyin.isCollected }"
  >
    <div
      class="relative w-full h-full transform-style-3d transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      :class="{
        'rotate-y-180': isFlipped,
        'animate-card-bounce': isBouncing,
      }"
    >
      <!-- Front Side -->
      <div
        class="absolute w-full h-full backface-hidden p-6 flex flex-col items-center justify-center bg-white"
      >
        <div
          class="w-36 h-36 sm:w-40 sm:h-40 mb-4 sm:mb-6 bg-primary-50 rounded-full flex items-center justify-center overflow-hidden"
        >
          <img
            :src="pinyin.image"
            alt="Pinyin illustration"
            class="size-full sm:w-32 sm:h-32 object-contain"
          />
        </div>
        <h2 class="text-3xl sm:text-4xl font-cute text-primary-700 mb-3 sm:mb-4">
          {{ pinyin.pinyin }}
        </h2>
        <button
          class="px-5 py-1.5 sm:px-6 sm:py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 active:scale-95 transition-all"
          @click.stop="playAudio"
        >
          <span class="text-base sm:text-lg">🔊 Play Sound</span>
        </button>
      </div>

      <!-- Back Side -->
      <div
        class="absolute w-full h-full backface-hidden rotate-y-180 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-primary-100 to-primary-50 rounded-2xl shadow-inner"
      >
        <h3 class="text-xl sm:text-2xl font-cute text-primary-700 mb-4 sm:mb-6">Example Words</h3>
        <ul class="text-center space-y-1 sm:space-y-2">
          <li
            v-for="(example, index) in pinyin.examples"
            :key="index"
            class="text-primary-600 text-base sm:text-lg"
          >
            {{ example }}
          </li>
        </ul>
        <button
          class="mt-4 sm:mt-6 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full transition-all"
          :class="{
            'bg-rose-500 text-white hover:bg-rose-600': pinyin.isCollected,
            'bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50':
              !pinyin.isCollected,
          }"
          @click.stop="toggleCollection"
        >
          <span class="text-base sm:text-lg">{{
            pinyin.isCollected ? '❤️ Collected' : '🤍 Add to Collection'
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

@keyframes card-bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.animate-card-bounce {
  animation: card-bounce 0.3s ease-in-out;
}
</style>
