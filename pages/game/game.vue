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
      uni.navigateTo({
        url: `/pages/game/${game.type}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.game-container {
  padding: 20px;
}

.game-selection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  
  .game-item {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .game-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }
    
    .game-title {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }
    
    .game-description {
      font-size: 12px;
      color: #666;
      text-align: center;
    }
  }
}

.game-progress {
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

.game-instructions {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  
  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .content {
    font-size: 14px;
    color: #666;
    white-space: pre-line;
  }
}
</style>
