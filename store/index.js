import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 用户学习进度
    learningProgress: {
      pinyin: [], // 已学习的拼音
      completedLessons: 0 // 完成的课程数
    },
    
    // 游戏数据
    gameData: {
      highScores: {
        pinyinPuzzle: 0,
        pinyinMatch: 0
      },
      currentStreak: 0
    },
    
    // 成就系统
    achievements: {
      badges: [],
      dailyLoginCount: 0,
      lastLoginDate: null
    }
  },
  mutations: {
    // 更新学习进度
    UPDATE_LEARNING_PROGRESS(state, payload) {
      state.learningProgress = {
        ...state.learningProgress,
        ...payload
      }
    },
    
    // 更新游戏数据
    UPDATE_GAME_DATA(state, payload) {
      state.gameData = {
        ...state.gameData,
        ...payload
      }
    },
    
    // 更新成就
    UPDATE_ACHIEVEMENTS(state, payload) {
      state.achievements = {
        ...state.achievements,
        ...payload
      }
    }
  },
  actions: {
    // 记录学习进度
    recordProgress({ commit }, payload) {
      commit('UPDATE_LEARNING_PROGRESS', payload)
    },
    
    // 更新游戏分数
    updateGameScore({ commit }, payload) {
      commit('UPDATE_GAME_DATA', payload)
    },
    
    // 记录每日登录
    recordDailyLogin({ commit, state }) {
      const today = new Date().toDateString()
      if (state.achievements.lastLoginDate !== today) {
        commit('UPDATE_ACHIEVEMENTS', {
          dailyLoginCount: state.achievements.dailyLoginCount + 1,
          lastLoginDate: today
        })
      }
    }
  },
  getters: {
    // 获取学习进度
    learningProgress: state => state.learningProgress,
    
    // 获取游戏数据
    gameData: state => state.gameData,
    
    // 获取成就
    achievements: state => state.achievements
  }
})

export default store
