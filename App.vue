<template>
  <view class="app-container">
    <!-- 全局加载状态 -->
    <view v-if="loading" class="global-loading">
      <image class="loading-icon" src="/static/icons/loading.gif" />
      <text class="loading-text">加载中...</text>
    </view>

    <!-- 全局错误提示 -->
    <view v-if="error" class="global-error">
      <text class="error-text">{{ error }}</text>
      <button class="retry-button" @click="handleRetry">重试</button>
    </view>

    <!-- 主内容区域 -->
    <view class="main-content">
      <router-view />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      error: null
    }
  },
  created() {
    // 监听全局加载状态
    this.$on('global-loading', (loading) => {
      this.loading = loading
    })

    // 监听全局错误
    this.$on('global-error', (error) => {
      this.error = error.message
    })
  },
  methods: {
    handleRetry() {
      this.error = null
      this.$router.go(0)
    }
  }
}
</script>

<style lang="scss">
.app-container {
  height: 100vh;
  position: relative;
}

.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  .loading-icon {
    width: 50px;
    height: 50px;
  }
  
  .loading-text {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
}

.global-error {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  .error-text {
    font-size: 16px;
    color: #ff4d4f;
    margin-bottom: 20px;
  }
  
  .retry-button {
    background-color: #4a90e2;
    color: #fff;
    border-radius: 20px;
    padding: 5px 20px;
  }
}

.main-content {
  height: 100%;
}
</style>
