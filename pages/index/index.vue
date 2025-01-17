<template>
  <view class="index-container">
    <!-- 欢迎区域 -->
    <view class="welcome-section">
      <image class="avatar" src="https://picsum.photos/200/200?random=2025" />
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
          @click="toggleTask(index)"
        >
          <uni-icons 
            :type="task.completed ? 'checkbox-filled' : 'circle'" 
            :color="task.completed ? '#4a90e2' : '#ccc'"
            size="20"
          />
          <text class="task-text" :class="{ completed: task.completed }">
            {{ task.text }}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import uniList from '@/uni_modules/uni-list/components/uni-list/uni-list.vue'
import uniListItem from '@/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue'

export default {
  components: {
    uniList,
    uniListItem
  },
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
      uni.switchTab({
        url: path,
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
  background: linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%);
  min-height: 100vh;
}

.welcome-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .welcome-text {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }
  
  .sub-text {
    font-size: 14px;
    color: #666;
  }
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-bottom: 40px;
  padding: 0 10px;
  border-radius: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  .action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 15px;
    // background: #fff;
    // border-radius: 25px;
    // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    aspect-ratio: 1/1;
    min-width: 0;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
    }
    
    .action-icon {
      width: 50px;
      height: 50px;
      margin-bottom: 15px;
      padding: 12px;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 4px 12px rgba(74, 125, 255, 0.15);
      transition: all 0.3s ease;
    }
    
    .action-text {
      font-size: 14px;
      font-weight: 600;
      color: #4a7dff;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
  }
}

.progress-section {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    
    .sub-title {
      font-size: 14px;
      font-weight: 500;
      color: #4a7dff;
    }
  }
  
  .progress-bar {
    position: relative;
    
    &::after {
      content: attr(percent);
      position: absolute;
      right: 0;
      top: -20px;
      font-size: 12px;
      color: #4a7dff;
      font-weight: bold;
    }
  }
}

.daily-task {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    
    .sub-title {
      font-size: 14px;
      font-weight: 500;
      color: #4a7dff;
    }
  }
  
  .task-list {
    .task-item {
      display: flex;
      align-items: center;
      padding: 15px;
      margin: 8px 0;
      border-radius: 15px;
      background: #f8f9ff;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(74, 125, 255, 0.15);
      
      &:hover {
        background: #f0f3ff;
      }
      
      .task-text {
        margin-left: 15px;
        font-size: 14px;
        font-weight: 500;
        color: #333;
        transition: all 0.2s ease;
        
        &.completed {
          color: #4a7dff;
          text-decoration: line-through;
          opacity: 0.8;
        }
      }
      
      .uni-icons {
        transition: all 0.2s ease;
      }
    }
  }
}
</style>
