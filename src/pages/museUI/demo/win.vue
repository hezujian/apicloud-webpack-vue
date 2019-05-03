<template>
  <div class="bg-primary header" id="header">
  </div>
</template>
<script>
import extendObj from "@/common/extends/vueObj.js";
import { openFrm, retRul } from "@/common/core/app.js";
export default {
  data: function() {
    return {
    };
  },
  components: {
  },
  methods: {
    init() {
      let headers = $api.byId("header")
      $api.fixStatusBar(headers)
      let headerPos = $api.offset(headers);
      openFrm({
        marginTop: headerPos.h,
      },'museUI/demo');
    }
  },
  extends: extendObj
};
</script>
<style lang="less" rel="stylesheet/less">
@import "~@/assets/css/common.less";
</style>
