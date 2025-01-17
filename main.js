import Vue from 'vue'
import App from './App'
import store from './store'

// 全局错误处理
Vue.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err)
  vm.$emit('global-error', {
    message: err.message,
    type: 'error'
  })
}

// 全局加载状态
Vue.prototype.$showLoading = function(loading = true) {
  this.$emit('global-loading', loading)
}

// 创建Vue实例
const app = new Vue({
  store,
  ...App
})

// 挂载应用
app.$mount()

export default {
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '儿童拼音学习',
      navigationBarTextStyle: 'black'
    }
  }
}
