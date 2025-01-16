<script setup>
import { computed, ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import { usePinyinStore } from '@/stores/pinyin'

// Register Chart.js components
Chart.register(...registerables)

const pinyinStore = usePinyinStore()
const chartRef = ref(null)
const isLoading = ref(true)
const chartError = ref(null)

const progressData = computed(() => ({
  initials: pinyinStore.initialProgress,
  finals: pinyinStore.finalProgress,
  syllables: pinyinStore.syllableProgress
}))

onMounted(() => {
  try {
    if (!chartRef.value) {
      throw new Error('Chart canvas not found')
    }

    const ctx = chartRef.value.getContext('2d')
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Initials', 'Finals', 'Syllables'],
        datasets: [{
          label: 'Progress',
          data: [
            progressData.value.initials.percentage,
            progressData.value.finals.percentage,
            progressData.value.syllables.percentage
          ],
          backgroundColor: [
            '#3b82f6',
            '#10b981',
            '#f59e0b'
          ],
          borderWidth: 0,
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || ''
                const value = context.raw || 0
                return `${label}: ${value}%`
              }
            }
          }
        }
      }
    })

    isLoading.value = false
  } catch (error) {
    chartError.value = error.message
    isLoading.value = false
  }
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-cute text-primary-700 mb-8">
      Learning Report
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Progress Chart -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-cute text-primary-600 mb-4">
          Overall Progress
        </h2>
        <canvas ref="chartRef"></canvas>
      </div>

      <!-- Statistics -->
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-cute text-primary-600 mb-4">
            Collected Cards
          </h2>
          <div class="text-4xl font-bold text-primary-700">
            {{ pinyinStore.collectedCards.length }}
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-cute text-primary-600 mb-4">
            Test Accuracy
          </h2>
          <div class="text-4xl font-bold text-primary-700">
            {{ pinyinStore.testAccuracy }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
canvas {
  max-height: 300px;
}
</style>
