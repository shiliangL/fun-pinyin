<template>
  <view class="learn-container">
    <!-- 拼音卡片 -->
    <view class="pinyin-cards">
      <view 
        class="card-item"
        v-for="(item, index) in pinyinList"
        :key="index"
        @click="playSound(item)"
      >
        <view class="card-content">
          <text class="pinyin-text">{{ item.pinyin }}</text>
          <text class="chinese-text">{{ item.chinese }}</text>
        </view>
        <image 
          class="play-icon"
          src="/static/icons/play.png"
        />
      </view>
    </view>

    <!-- 学习进度 -->
    <view class="learning-progress">
      <text class="progress-text">
        已学习 {{ learnedCount }}/{{ pinyinList.length }} 个拼音
      </text>
      <progress 
        class="progress-bar"
        :percent="progress"
        stroke-width="6"
        activeColor="#4a90e2"
      />
    </view>

    <!-- 练习模式 -->
    <view class="practice-mode">
      <view class="mode-header">
        <text class="title">练习模式</text>
        <text class="sub-title">选择你想练习的内容</text>
      </view>
      <view class="mode-list">
        <view 
          class="mode-item"
          v-for="(mode, index) in practiceModes"
          :key="index"
          @click="startPractice(mode)"
        >
          <image class="mode-icon" :src="mode.icon" />
          <text class="mode-text">{{ mode.text }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pinyinList: [
        { pinyin: 'bā', chinese: '八', audio: '/static/audio/ba.mp3' },
        { pinyin: 'pá', chinese: '爬', audio: '/static/audio/pa.mp3' },
        { pinyin: 'mā', chinese: '妈', audio: '/static/audio/ma.mp3' },
        { pinyin: 'fā', chinese: '发', audio: '/static/audio/fa.mp3' }
      ],
      learnedCount: 2,
      practiceModes: [
        {
          text: '声母练习',
          icon: '/static/icons/shengmu.png',
          type: 'initial'
        },
        {
          text: '韵母练习',
          icon: '/static/icons/yunmu.png',
          type: 'final'
        },
        {
          text: '整体认读',
          icon: '/static/icons/zhengti.png',
          type: 'whole'
        }
      ]
    }
  },
  computed: {
    progress() {
      return Math.round((this.learnedCount / this.pinyinList.length) * 100)
    }
  },
  methods: {
    playSound(item) {
      const innerAudioContext = uni.createInnerAudioContext()
      innerAudioContext.src = item.audio
      innerAudioContext.play()
      
      // 标记为已学习
      if (!item.learned) {
        item.learned = true
        this.learnedCount++
      }
    },
    startPractice(mode) {
      uni.navigateTo({
        url: `/pages/learn/practice?type=${mode.type}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.learn-container {
  padding: 20px;
}

.pinyin-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  
  .card-item {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .card-content {
      display: flex;
      flex-direction: column;
      
      .pinyin-text {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }
      
      .chinese-text {
        font-size: 16px;
        color: #666;
      }
    }
    
    .play-icon {
      width: 24px;
      height: 24px;
    }
  }
}

.learning-progress {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  
  .progress-text {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }
}

.practice-mode {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  
  .mode-header {
    margin-bottom: 15px;
    
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    
    .sub-title {
      font-size: 14px;
      color: #666;
    }
  }
  
  .mode-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    
    .mode-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .mode-icon {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
      
      .mode-text {
        font-size: 14px;
        color: #333;
        text-align: center;
      }
    }
  }
}
</style>
