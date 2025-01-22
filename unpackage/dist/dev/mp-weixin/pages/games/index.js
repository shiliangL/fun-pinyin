"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    startGame(type) {
      common_vendor.index.navigateTo({
        url: `/pages/games/${type}/index`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$3,
    b: common_vendor.o(($event) => $options.startGame("chain")),
    c: common_assets._imports_0$3,
    d: common_vendor.o(($event) => $options.startGame("puzzle")),
    e: common_assets._imports_0$3,
    f: common_vendor.o(($event) => $options.startGame("matching"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/games/index.js.map
