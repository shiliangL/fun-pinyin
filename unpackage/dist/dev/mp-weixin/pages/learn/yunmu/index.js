"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pinyinList: ["a", "o", "e", "i", "u", "ü", "ai", "ei", "ui", "ao", "ou", "iu", "ie", "üe", "er", "an", "en", "in", "un", "ün", "ang", "eng", "ing", "ong"],
      currentPlaying: null,
      loading: null,
      audioContext: null
    };
  },
  methods: {
    playAudio(pinyin) {
      if (this.currentPlaying === pinyin) {
        this.stopAudio();
        return;
      }
      this.loading = pinyin;
      this.currentPlaying = null;
      if (this.audioContext) {
        this.audioContext.destroy();
      }
      this.audioContext = common_vendor.index.createInnerAudioContext();
      this.audioContext.src = `/static/audio/${pinyin}.mp3`;
      this.audioContext.onPlay(() => {
        this.loading = null;
        this.currentPlaying = pinyin;
      });
      this.audioContext.onError((err) => {
        common_vendor.index.__f__("error", "at pages/learn/yunmu/index.vue:59", "Audio error:", err);
        common_vendor.index.showToast({
          title: "播放失败",
          icon: "none"
        });
        this.loading = null;
        this.currentPlaying = null;
      });
      this.audioContext.onEnded(() => {
        this.currentPlaying = null;
      });
      this.audioContext.play();
    },
    stopAudio() {
      if (this.audioContext) {
        this.audioContext.stop();
        this.audioContext.destroy();
        this.audioContext = null;
      }
      this.currentPlaying = null;
      this.loading = null;
    }
  },
  beforeDestroy() {
    this.stopAudio();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.pinyinList, (pinyin, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(pinyin),
        b: $data.currentPlaying === pinyin ? "/static/icons/pause.png" : "/static/icons/play.png",
        c: $data.loading === pinyin
      }, $data.loading === pinyin ? {} : {}, {
        d: index,
        e: common_vendor.o(($event) => $options.playAudio(pinyin), index),
        f: $data.currentPlaying === pinyin ? 1 : ""
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/learn/yunmu/index.js.map
