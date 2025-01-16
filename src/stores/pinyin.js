import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePinyinStore = defineStore('pinyin', () => {
  // Initial pinyin data
  const initials = ref([
    { id: 'b', type: 'initial', pinyin: 'b', image: 'https://picsum.photos/640/640?random=b.svg', audio: '/audio/initials/b.mp3', examples: ['爸爸', '杯子', '书包'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'p', type: 'initial', pinyin: 'p', image: 'https://picsum.photos/640/640?random=p.svg', audio: '/audio/initials/p.mp3', examples: ['苹果', '跑步', '朋友'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'm', type: 'initial', pinyin: 'm', image: 'https://picsum.photos/640/640?random=m.svg', audio: '/audio/initials/m.mp3', examples: ['妈妈', '猫咪', '米饭'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'f', type: 'initial', pinyin: 'f', image: 'https://picsum.photos/640/640?random=f.svg', audio: '/audio/initials/f.mp3', examples: ['飞机', '风车', '衣服'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'd', type: 'initial', pinyin: 'd', image: 'https://picsum.photos/640/640?random=d.svg', audio: '/audio/initials/d.mp3', examples: ['大象', '蛋糕', '弟弟'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 't', type: 'initial', pinyin: 't', image: 'https://picsum.photos/640/640?random=t.svg', audio: '/audio/initials/t.mp3', examples: ['太阳', '兔子', '头发'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'n', type: 'initial', pinyin: 'n', image: 'https://picsum.photos/640/640?random=n.svg', audio: '/audio/initials/n.mp3', examples: ['牛奶', '南瓜', '女孩'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'l', type: 'initial', pinyin: 'l', image: 'https://picsum.photos/640/640?random=l.svg', audio: '/audio/initials/l.mp3', examples: ['老师', '老虎', '礼物'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'g', type: 'initial', pinyin: 'g', image: 'https://picsum.photos/640/640?random=g.svg', audio: '/audio/initials/g.mp3', examples: ['哥哥', '公园', '苹果'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'k', type: 'initial', pinyin: 'k', image: 'https://picsum.photos/640/640?random=k.svg', audio: '/audio/initials/k.mp3', examples: ['考拉', '开心', '看书'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'h', type: 'initial', pinyin: 'h', image: 'https://picsum.photos/640/640?random=h.svg', audio: '/audio/initials/h.mp3', examples: ['喝水', '花朵', '红色'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'j', type: 'initial', pinyin: 'j', image: 'https://picsum.photos/640/640?random=j.svg', audio: '/audio/initials/j.mp3', examples: ['姐姐', '鸡蛋', '橘子'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'q', type: 'initial', pinyin: 'q', image: 'https://picsum.photos/640/640?random=q.svg', audio: '/audio/initials/q.mp3', examples: ['气球', '汽车', '铅笔'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'x', type: 'initial', pinyin: 'x', image: 'https://picsum.photos/640/640?random=x.svg', audio: '/audio/initials/x.mp3', examples: ['西瓜', '星星', '学校'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'zh', type: 'initial', pinyin: 'zh', image: 'https://picsum.photos/640/640?random=zh.svg', audio: '/audio/initials/zh.mp3', examples: ['知道', '直接', '支持'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ch', type: 'initial', pinyin: 'ch', image: 'https://picsum.photos/640/640?random=ch.svg', audio: '/audio/initials/ch.mp3', examples: ['吃饭', '唱歌', '窗户'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'sh', type: 'initial', pinyin: 'sh', image: 'https://picsum.photos/640/640?random=sh.svg', audio: '/audio/initials/sh.mp3', examples: ['书包', '老师', '石头'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'r', type: 'initial', pinyin: 'r', image: 'https://picsum.photos/640/640?random=r.svg', audio: '/audio/initials/r.mp3', examples: ['热狗', '日本', '认识'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'z', type: 'initial', pinyin: 'z', image: 'https://picsum.photos/640/640?random=z.svg', audio: '/audio/initials/z.mp3', examples: ['足球', '作业', '自己'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'c', type: 'initial', pinyin: 'c', image: 'https://picsum.photos/640/640?random=c.svg', audio: '/audio/initials/c.mp3', examples: ['草莓', '草地', '吃饭'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 's', type: 'initial', pinyin: 's', image: 'https://picsum.photos/640/640?random=s.svg', audio: '/audio/initials/s.mp3', examples: ['松鼠', '雨伞', '颜色'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'y', type: 'initial', pinyin: 'y', image: 'https://picsum.photos/640/640?random=y.svg', audio: '/audio/initials/y.mp3', examples: ['衣服', '月亮', '音乐'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'w', type: 'initial', pinyin: 'w', image: 'https://picsum.photos/640/640?random=w.svg', audio: '/audio/initials/w.mp3', examples: ['玩具', '乌龟', '微笑'], isCollected: false, testAttempts: 0, testCorrect: 0 }
  ])

  const finals = ref([
    { id: 'a', type: 'final', pinyin: 'a', image: 'https://picsum.photos/640/640?random=a.svg', audio: '/audio/finals/a.mp3', examples: ['妈妈', '爸爸', '沙发'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'o', type: 'final', pinyin: 'o', image: 'https://picsum.photos/640/640?random=o.svg', audio: '/audio/finals/o.mp3', examples: ['喔喔', '哦哦', '噢噢'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'e', type: 'final', pinyin: 'e', image: 'https://picsum.photos/640/640?random=e.svg', audio: '/audio/finals/e.mp3', examples: ['鹅鹅', '饿饿', '呃呃'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'i', type: 'final', pinyin: 'i', image: 'https://picsum.photos/640/640?random=i.svg', audio: '/audio/finals/i.mp3', examples: ['衣服', '椅子', '医生'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'u', type: 'final', pinyin: 'u', image: 'https://picsum.photos/640/640?random=u.svg', audio: '/audio/finals/u.mp3', examples: ['乌龟', '乌鸦', '屋子'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ü', type: 'final', pinyin: 'ü', image: 'https://picsum.photos/640/640?random=ü.svg', audio: '/audio/finals/ü.mp3', examples: ['雨伞', '玉米', '鱼'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ai', type: 'final', pinyin: 'ai', image: 'https://picsum.photos/640/640?random=ai.svg', audio: '/audio/finals/ai.mp3', examples: ['爱心', '矮子', '哎呀'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ei', type: 'final', pinyin: 'ei', image: 'https://picsum.photos/640/640?random=ei.svg', audio: '/audio/finals/ei.mp3', examples: ['诶诶', '诶呀', '诶哟'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ui', type: 'final', pinyin: 'ui', image: 'https://picsum.photos/640/640?random=ui.svg', audio: '/audio/finals/ui.mp3', examples: ['围巾', '尾巴', '微笑'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ao', type: 'final', pinyin: 'ao', image: 'https://picsum.photos/640/640?random=ao.svg', audio: '/audio/finals/ao.mp3', examples: ['奥运', '骄傲', '熬夜'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ou', type: 'final', pinyin: 'ou', image: 'https://picsum.photos/640/640?random=ou.svg', audio: '/audio/finals/ou.mp3', examples: ['欧洲', '呕吐', '偶然'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'iu', type: 'final', pinyin: 'iu', image: 'https://picsum.photos/640/640?random=iu.svg', audio: '/audio/finals/iu.mp3', examples: ['优秀', '游泳', '邮票'], isCollected: false, testAttempts: 0, testCorrect: 0 },
    { id: 'ie', type: 'final', pinyin: 'ie', image: 'https://picsum.photos/640/640?random=ie.svg', audio: '/audio/finals/ie.mp3', examples: ['爷爷', '叶子', '夜晚'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'üe', type: 'final', pinyin: 'üe', image: 'https://picsum.photos/640/640?random=üe.svg', audio: '/audio/finals/üe.mp3', examples: ['月亮', '约好', '阅读'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'er', type: 'final', pinyin: 'er', image: 'https://picsum.photos/640/640?random=er.svg', audio: '/audio/finals/er.mp3', examples: ['儿子', '耳朵', '二'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'an', type: 'final', pinyin: 'an', image: 'https://picsum.photos/640/640?random=an.svg', audio: '/audio/finals/an.mp3', examples: ['安全', '安静', '按时'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'en', type: 'final', pinyin: 'en', image: 'https://picsum.photos/640/640?random=en.svg', audio: '/audio/finals/en.mp3', examples: ['恩情', '恩人', '恩赐'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'in', type: 'final', pinyin: 'in', image: 'https://picsum.photos/640/640?random=in.svg', audio: '/audio/finals/in.mp3', examples: ['因为', '音乐', '银行'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'un', type: 'final', pinyin: 'un', image: 'https://picsum.photos/640/640?random=un.svg', audio: '/audio/finals/un.mp3', examples: ['温暖', '温度', '蚊子'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ün', type: 'final', pinyin: 'ün', image: 'https://picsum.photos/640/640?random=ün.svg', audio: '/audio/finals/ün.mp3', examples: ['云朵', '运动', '运气'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ang', type: 'final', pinyin: 'ang', image: 'https://picsum.photos/640/640?random=ang.svg', audio: '/audio/finals/ang.mp3', examples: ['昂首', '肮脏', '昂贵'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'eng', type: 'final', pinyin: 'eng', image: 'https://picsum.photos/640/640?random=eng.svg', audio: '/audio/finals/eng.mp3', examples: ['英文', '英雄', '樱桃'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ing', type: 'final', pinyin: 'ing', image: 'https://picsum.photos/640/640?random=ing.svg', audio: '/audio/finals/ing.mp3', examples: ['应该', '英雄', '樱桃'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ong', type: 'final', pinyin: 'ong', image: 'https://picsum.photos/640/640?random=ong.svg', audio: '/audio/finals/ong.mp3', examples: ['中国', '中间', '重要'],  isCollected: false, testAttempts: 0, testCorrect: 0  }
  ])

  const syllables = ref([
    { id: 'zhi', type: 'syllable', pinyin: 'zhi', image: 'https://picsum.photos/640/640?random=zhi.svg', audio: '/audio/syllables/zhi.mp3', examples: ['知道', '直接', '支持'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'chi', type: 'syllable', pinyin: 'chi', image: 'https://picsum.photos/640/640?random=chi.svg', audio: '/audio/syllables/chi.mp3', examples: ['吃饭', '迟到', '池塘'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'shi', type: 'syllable', pinyin: 'shi', image: 'https://picsum.photos/640/640?random=shi.svg', audio: '/audio/syllables/shi.mp3', examples: ['石头', '时间', '老师'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ri', type: 'syllable', pinyin: 'ri', image: 'https://picsum.photos/640/640?random=ri.svg', audio: '/audio/syllables/ri.mp3', examples: ['日本', '日子', '日历'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'zi', type: 'syllable', pinyin: 'zi', image: 'https://picsum.photos/640/640?random=zi.svg', audio: '/audio/syllables/zi.mp3', examples: ['自己', '字母', '紫色'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ci', type: 'syllable', pinyin: 'ci', image: 'https://picsum.photos/640/640?random=ci.svg', audio: '/audio/syllables/ci.mp3', examples: ['词语', '刺猬', '次数'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'si', type: 'syllable', pinyin: 'si', image: 'https://picsum.photos/640/640?random=si.svg', audio: '/audio/syllables/si.mp3', examples: ['思考', '丝绸', '司机'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'yi', type: 'syllable', pinyin: 'yi', image: 'https://picsum.photos/640/640?random=yi.svg', audio: '/audio/syllables/yi.mp3', examples: ['衣服', '医生', '椅子'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'wu', type: 'syllable', pinyin: 'wu', image: 'https://picsum.photos/640/640?random=wu.svg', audio: '/audio/syllables/wu.mp3', examples: ['乌龟', '乌鸦', '屋子'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'yu', type: 'syllable', pinyin: 'yu', image: 'https://picsum.photos/640/640?random=yu.svg', audio: '/audio/syllables/yu.mp3', examples: ['雨伞', '玉米', '鱼'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ye', type: 'syllable', pinyin: 'ye', image: 'https://picsum.photos/640/640?random=ye.svg', audio: '/audio/syllables/ye.mp3', examples: ['爷爷', '叶子', '夜晚'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'yue', type: 'syllable', pinyin: 'yue', image: 'https://picsum.photos/640/640?random=yue.svg', audio: '/audio/syllables/yue.mp3', examples: ['月亮', '约好', '阅读'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'yuan', type: 'syllable', pinyin: 'yuan', image: 'https://picsum.photos/640/640?random=yuan.svg', audio: '/audio/syllables/yuan.mp3', examples: ['圆圈', '远处', '愿望'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'yin', type: 'syllable', pinyin: 'yin', image: 'https://picsum.photos/640/640?random=yin.svg', audio: '/audio/syllables/yin.mp3', examples: ['因为', '音乐', '银行'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'yun', type: 'syllable', pinyin: 'yun', image: 'https://picsum.photos/640/640?random=yun.svg', audio: '/audio/syllables/yun.mp3', examples: ['云朵', '运动', '运气'],  isCollected: false, testAttempts: 0, testCorrect: 0  },
    { id: 'ying', type: 'syllable', pinyin: 'ying', image: 'https://picsum.photos/640/640?random=ying.svg', audio: '/audio/syllables/ying.mp3', examples: ['应该', '英雄', '樱桃'],  isCollected: false, testAttempts: 0, testCorrect: 0  }
  ])

  function loadPinyinData() {

  }

  // Get all cards
  const allCards = computed(() => [
    ...initials.value,
    ...finals.value,
    ...syllables.value
  ])

  // Get collected cards
  const collectedCards = computed(() =>
    allCards.value.filter(card => card.isCollected)
  )

  // Toggle collection status
  const toggleCollection = (id) => {
    const card = allCards.value.find(card => card.id === id)
    if (card) {
      card.isCollected = !card.isCollected
    }
  }

  // Get random cards for testing
  const getRandomCards = (count = 10) => {
    const shuffled = allCards.value.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  // Progress tracking
  const initialProgress = computed(() => {
    const completed = initials.value.filter(i => i.isCollected).length
    return {
      completed,
      total: initials.value.length,
      percentage: Math.round((completed / initials.value.length) * 100)
    }
  })

  const finalProgress = computed(() => {
    const completed = finals.value.filter(f => f.isCollected).length
    return {
      completed,
      total: finals.value.length,
      percentage: Math.round((completed / finals.value.length) * 100)
    }
  })

  const syllableProgress = computed(() => {
    const completed = syllables.value.filter(s => s.isCollected).length
    return {
      completed,
      total: syllables.value.length,
      percentage: Math.round((completed / syllables.value.length) * 100)
    }
  })

  // Test accuracy tracking
  const testAccuracy = computed(() => {
    const totalTests = allCards.value.filter(card => card.testAttempts > 0).length
    if (totalTests === 0) return 0

    const correctTests = allCards.value
      .filter(card => card.testAttempts > 0)
      .reduce((sum, card) => sum + (card.testCorrect || 0), 0)

    return Math.round((correctTests / totalTests) * 100)
  })

  return {
    initials,
    finals,
    syllables,
    allCards,
    collectedCards,
    toggleCollection,
    getRandomCards,
    initialProgress,
    finalProgress,
    syllableProgress,
    testAccuracy,
    loadPinyinData
  }
})
