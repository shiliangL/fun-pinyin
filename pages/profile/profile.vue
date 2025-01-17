<template>
  <view class="profile-container">
    <!-- 用户信息 -->
    <view class="user-info">
      <image class="avatar" src="/static/icons/avatar.png" />
      <text class="username">小朋友</text>
      <text class="level">等级：青铜</text>
    </view>

    <!-- 成就徽章 -->
    <view class="achievements">
      <text class="section-title">我的徽章</text>
      <view class="badge-list">
        <view 
          class="badge-item"
          v-for="(badge, index) in badges"
          :key="index"
        >
          <image class="badge-icon" :src="badge.icon" />
          <text class="badge-name">{{ badge.name }}</text>
        </view>
      </view>
    </view>

    <!-- 签到 -->
    <view class="check-in">
      <text class="section-title">每日签到</text>
      <uni-calendar
        :insert="true"
        :lunar="true"
        :selected="selectedDates"
        @change="handleCheckIn"
      />
    </view>

    <!-- 学习数据 -->
    <view class="learning-stats">
      <text class="section-title">学习数据</text>
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
          icon: '/static/icons/badge1.png'
        },
        {
          name: '游戏达人',
          icon: '/static/icons/badge2.png'
        },
        {
          name: '学习之星',
          icon: '/static/icons/badge3.png'
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
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .username {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }
  
  .level {
    font-size: 14px;
    color: #666;
  }
}

.achievements {
  margin-bottom: 30px;
  
  .section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .badge-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    
    .badge-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .badge-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
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
  }
}

.learning-stats {
  .section-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    
    .stat-item {
      background-color: #fff;
      border-radius: 10px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      
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
