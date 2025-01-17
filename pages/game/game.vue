<template>
  <view class="game-container">
    <!-- 游戏选择 -->
    <view class="game-selection">
      <view 
        class="game-item"
        v-for="(game, index) in games"
        :key="index"
        @click="startGame(game)"
      >
        <image class="game-icon" :src="game.icon" />
        <text class="game-title">{{ game.title }}</text>
        <text class="game-description">{{ game.description }}</text>
      </view>
    </view>

    <!-- 游戏进度 -->
    <view class="game-progress">
      <text class="progress-text">
        已完成 {{ completedGames }}/{{ games.length }} 个游戏
      </text>
      <progress 
        class="progress-bar"
        :percent="progress"
        stroke-width="6"
        activeColor="#4a90e2"
      />
    </view>

    <!-- 游戏说明 -->
    <view class="game-instructions">
      <text class="title">游戏说明</text>
      <text class="content">
        1. 选择你想玩的游戏\n
        2. 根据提示完成游戏\n
        3. 获得星星奖励\n
        4. 解锁更多游戏
      </text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          title: '拼音接龙',
          description: '根据提示选择正确拼音',
          icon: '/static/icons/game1.png',
          type: 'chain',
          completed: true
        },
        {
          title: '拼音拼图',
          description: '将声母和韵母组合',
          icon: '/static/icons/game2.png',
          type: 'puzzle',
          completed: false
        },
        {
          title: '拼音找朋友',
          description: '匹配拼音和图片',
          icon: '/static/icons/game3.png',
          type: 'match',
          completed: false
        }
      ]
    }
  },
  computed: {
    completedGames() {
      return this.games.filter(g => g.completed).length
    },
    progress() {
      return Math.round((this.completedGames / this.games.length) * 100)
    }
  },
  methods: {
    startGame(game) {
      uni.switchTab({
        url: `/pages/learn/learn`,
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
.game-container {
  padding: 20px;
  background: linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%);
  min-height: 100vh;
}

.game-selection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  
  .game-item {
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    .game-icon {
      width: 80px;
      height: 80px;
      margin-bottom: 15px;
      border-radius: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .game-title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      
      &::before {
        content: '🎮';
        margin-right: 8px;
      }
    }
    
    .game-description {
      font-size: 14px;
      color: #666;
      text-align: center;
      line-height: 1.4;
    }
  }
}

.game-progress {
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
      content: '📊';
      margin-right: 8px;
    }
  }
  
  .progress-bar {
    border-radius: 10px;
    overflow: hidden;
  }
}

.game-instructions {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    
    &::before {
      content: '📝';
      margin-right: 8px;
    }
  }
  
  .content {
    font-size: 14px;
    color: #666;
    white-space: pre-line;
    line-height: 1.6;
    padding-left: 28px;
    
    &::before {
      content: '👉';
      margin-right: 8px;
    }
  }
}
</style>
