<template>
  <div class="bg-primary header" id="header">

  </div>
</template>
<script>
import extendObj from '@/common/extends/vueObj.js'
import { openFrm, retRul } from '@/common/core/app.js'
export default {
  data: function () {
    return {
    }
  },
  methods: {
    init () {
      let headers = $api.byId('header')
      $api.fixStatusBar(headers)
      let headerPos = $api.offset(headers)
      let path = api.pageParam.path
      api.openFrame({
        name: 'muse',
        url: 'https://muse-ui.org/#/zh-CN/' + path,
        rect: {
          marginTop: headerPos.h - 2,
          marginBottom: 0,
          w: 'auto'
        },
        pageParam: {
          name: 'test'
        }
      })
    }
  },
  extends: extendObj
}
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../../assets/css/common.less";
</style>
