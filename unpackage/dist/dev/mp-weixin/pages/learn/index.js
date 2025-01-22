"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      progress: 25,
      audioContext: null
    };
  },
  methods: {
    navigateTo(type) {
      common_vendor.index.navigateTo({
        url: `/pages/learn/${type}`
      });
    },
    playAudio(type) {
      if (!this.audioContext) {
        this.audioContext = common_vendor.index.createInnerAudioContext();
      }
      this.audioContext.src = `/static/audio/${type}.mp3`;
      this.audioContext.play();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.progress),
    b: $data.progress + "%",
    c: common_assets._imports_0$1,
    d: common_assets._imports_0$2,
    e: common_vendor.o(($event) => $options.playAudio("ba")),
    f: common_vendor.o(($event) => $options.navigateTo("shengmu")),
    g: common_assets._imports_2,
    h: common_assets._imports_0$2,
    i: common_vendor.o(($event) => $options.playAudio("ma")),
    j: common_vendor.o(($event) => $options.navigateTo("yunmu")),
    k: common_assets._imports_3$1,
    l: common_assets._imports_0$2,
    m: common_vendor.o(($event) => $options.playAudio("fa")),
    n: common_vendor.o(($event) => $options.navigateTo("zhengti"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/learn/index.js.map
