"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "checkmarkempty",
      size: "24",
      color: "#4CAF50"
    }),
    b: common_vendor.p({
      type: "star",
      size: "24",
      color: "#FFC107"
    }),
    c: common_vendor.p({
      type: "star",
      size: "24",
      color: "#FFC107"
    }),
    d: common_vendor.p({
      type: "star",
      size: "24",
      color: "#FFC107"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/profile/index.js.map
