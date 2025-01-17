<template>
  <view class="index-container">
    <!-- 欢迎区域 -->
    <view class="welcome-section">
      <image class="avatar" src="/static/logo.png" />
      <text class="welcome-text">欢迎回来！</text>
      <text class="sub-text">今天也要努力学习拼音哦~</text>
    </view>

    <!-- 快速入口 -->
    <view class="quick-actions">
      <view 
        class="action-item"
        v-for="(item, index) in quickActions"
        :key="index"
        @click="handleAction(item.path)"
      >
        <image class="action-icon" :src="item.icon" />
        <text class="action-text">{{ item.text }}</text>
      </view>
    </view>

    <!-- 学习进度 -->
    <view class="progress-section">
      <view class="progress-header">
        <text class="title">学习进度</text>
        <text class="sub-title">已学习 {{ progress }}%</text>
      </view>
      <progress 
        class="progress-bar"
        :percent="progress"
        stroke-width="6"
        activeColor="#4a90e2"
      />
    </view>

    <!-- 每日任务 -->
    <view class="daily-task">
      <view class="task-header">
        <text class="title">今日任务</text>
        <text class="sub-title">已完成 {{ completedTasks }}/{{ totalTasks }} 项</text>
      </view>
      <view class="task-list">
        <view 
          class="task-item"
          v-for="(task, index) in tasks"
          :key="index"
        >
          <checkbox 
            :value="task.completed"
            :checked="task.completed"
            @click="toggleTask(index)"
          />
          <text class="task-text">{{ task.text }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      progress: 45,
      completedTasks: 1,
      totalTasks: 3,
      tasks: [
        { text: '完成拼音卡片学习', completed: true },
        { text: '玩1个拼音游戏', completed: false },
        { text: '复习昨日内容', completed: false }
      ],
      quickActions: [
        {
          text: '开始学习',
          icon: '/static/tabbar/learn.png',
          path: '/pages/learn/learn'
        },
        {
          text: '拼音游戏',
          icon: '/static/tabbar/game.png',
          path: '/pages/game/game'
        },
        {
          text: '我的成就',
          icon: '/static/tabbar/profile.png',
          path: '/pages/profile/profile'
        }
      ]
    }
  },
  methods: {
    handleAction(path) {
      uni.navigateTo({
        url: path
      })
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed
      this.completedTasks = this.tasks.filter(t => t.completed).length
    }
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  padding: 20px;
}

.welcome-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .welcome-text {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .sub-text {
    font-size: 14px;
    color: #666;
  }
}

.quick-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  
  .action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    
    .action-icon {
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
    }
    
    .action-text {
      font-size: 14px;
      color: #333;
    }
  }
}

.progress-section {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  
  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    
    .sub-title {
      font-size: 14px;
      color: #666;
    }
  }
}

.daily-task {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  
  .task-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    
    .sub-title {
      font-size: 14px;
      color: #666;
    }
  }
  
  .task-list {
    .task-item {
      display: flex;
      align-items: center;
      margin: 10px 0;
      
      .task-text {
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
