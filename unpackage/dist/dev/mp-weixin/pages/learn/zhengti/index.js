"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      pinyinList: ["zhi", "chi", "shi", "ri", "zi", "ci", "si", "yi", "wu", "yu", "ye", "yue", "yuan", "yin", "yun", "ying"],
      activePinyin: null,
      practicedPinyin: []
    };
  },
  computed: {
    practicedCount() {
      return this.practicedPinyin.length;
    }
  },
  methods: {
    playAudio(pinyin) {
      this.activePinyin = pinyin;
      const innerAudioContext = common_vendor.index.createInnerAudioContext();
      innerAudioContext.src = `/static/audio/${pinyin}.mp3`;
      innerAudioContext.play();
      innerAudioContext.onEnded(() => {
        this.activePinyin = null;
        if (!this.practicedPinyin.includes(pinyin)) {
          this.practicedPinyin.push(pinyin);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.practicedCount),
    b: common_vendor.t($data.pinyinList.length),
    c: common_vendor.f($data.pinyinList, (pinyin, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(pinyin),
        b: $data.practicedPinyin.includes(pinyin)
      }, $data.practicedPinyin.includes(pinyin) ? {} : {}, {
        c: index,
        d: $data.activePinyin === pinyin ? 1 : "",
        e: $data.practicedPinyin.includes(pinyin) ? 1 : "",
        f: common_vendor.o(($event) => $options.playAudio(pinyin), index)
      });
    }),
    d: common_assets._imports_0$2
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/learn/zhengti/index.js.map
