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
      // 使用switchTab进行页面切换
      uni.switchTab({
        url: `/pages/game/game`,
        success: () => {
          console.log('跳转成功')
        },
        fail: (err) => {
          uni.showToast({
            title: '页面跳转失败',
            icon: 'none'
          })
          console.error('跳转失败:', err)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.learn-container {
  padding: 20px;
  background: linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%);
  min-height: 100vh;
}

.pinyin-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  
  .card-item {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    .card-content {
      display: flex;
      flex-direction: column;
      
      .pinyin-text {
        font-size: 28px;
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;
        
        &::before {
          content: '🔤';
          margin-right: 8px;
        }
      }
      
      .chinese-text {
        font-size: 18px;
        color: #666;
        margin-top: 8px;
      }
    }
    
    .play-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      padding: 8px;
      background: #f0f4ff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
}

.learning-progress {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  .progress-text {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    
    &::before {
      content: '📚';
      margin-right: 8px;
    }
  }
  
  .progress-bar {
    border-radius: 10px;
    overflow: hidden;
  }
}

.practice-mode {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  .mode-header {
    margin-bottom: 20px;
    
    .title {
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      
      &::before {
        content: '🎯';
        margin-right: 8px;
      }
    }
    
    .sub-title {
      font-size: 14px;
      color: #666;
      margin-top: 8px;
    }
  }
  
  .mode-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    
    .mode-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      border-radius: 15px;
      background: #f8f9ff;
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
      }
      
      .mode-icon {
        width: 48px;
        height: 48px;
        margin-bottom: 12px;
      }
      
      .mode-text {
        font-size: 14px;
        color: #333;
        text-align: center;
        font-weight: 500;
      }
    }
  }
}
</style>
