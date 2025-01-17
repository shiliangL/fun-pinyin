<template>
  <view class="profile-container">
    <!-- 用户信息 -->
    <view class="user-info">
      <image class="avatar" src="https://picsum.photos/200/200?random=2025" />
      <view class="info-bubble">
        <text class="username">小朋友</text>
        <text class="level">等级：青铜</text>
      </view>
    </view>

    <!-- 成就徽章 -->
    <view class="achievements">
      <text class="section-title">🏆 我的徽章</text>
      <view class="badge-list">
        <view 
          class="badge-item"
          v-for="(badge, index) in badges"
          :key="index"
        >
          <view class="badge-icon">
            <text>{{ badge.icon }}</text>
          </view>
          <text class="badge-name">{{ badge.name }}</text>
        </view>
      </view>
    </view>

    <!-- 签到 -->
    <view class="check-in">
      <text class="section-title">📅 每日签到</text>
      <uni-calendar
        :insert="true"
        :lunar="true"
        :selected="selectedDates"
        @change="handleCheckIn"
        class="calendar"
      />
    </view>

    <!-- 学习数据 -->
    <view class="learning-stats">
      <text class="section-title">📊 学习数据</text>
      <view class="stats-grid">
        <view class="stat-item">
          <text class="stat-value">12</text>
          <text class="stat-label">学习天数</text>
        </view>
        <view class="stat-item">
          <text class="stat-value">36</text>
          <text class="stat-label">学习拼音</text>
        </view>
        <view class="stat-item">
          <text class="stat-value">8</text>
          <text class="stat-label">完成游戏</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      badges: [
        {
          name: '拼音小能手',
          icon: '🏆'
        },
        {
          name: '游戏达人',
          icon: '🎖️'
        },
        {
          name: '学习之星',
          icon: '🏅'
        }
      ],
      selectedDates: [
        {
          date: '2023-10-01',
          info: '已签到'
        },
        {
          date: '2023-10-02',
          info: '已签到'
        }
      ]
    }
  },
  methods: {
    handleCheckIn(e) {
      const date = e.fulldate
      if (!this.selectedDates.find(d => d.date === date)) {
        this.selectedDates.push({
          date: date,
          info: '已签到'
        })
        uni.showToast({
          title: '签到成功',
          icon: 'success'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-container {
  padding: 20px;
  background: linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%);
  min-height: 100vh;
}

.user-info {
  display: flex;
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
    margin-right: 20px;
    border: 3px solid #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .info-bubble {
    background: linear-gradient(135deg, #6a8eff, #4a7dff);
    padding: 15px 20px;
    border-radius: 20px;
    color: #fff;
  }
  
  .username {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .level {
    font-size: 14px;
    opacity: 0.9;
  }
}

.achievements {
  margin-bottom: 30px;
  
  .section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .badge-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    
    .badge-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      padding: 15px;
      border-radius: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
      }
      
      .badge-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        margin-bottom: 10px;
      }
      
      .badge-name {
        font-size: 12px;
        color: #666;
        text-align: center;
      }
    }
  }
}

.check-in {
  margin-bottom: 30px;
  
  .section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .calendar {
    background: #fff;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
}

.learning-stats {
  .section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    
    .stat-item {
      background: #fff;
      border-radius: 15px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
      }
      
      .stat-value {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
      }
      
      .stat-label {
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
