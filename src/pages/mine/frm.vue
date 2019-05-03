<template>
  <div class="container">
    sdfsdfdsf
  </div>
</template>
<script>
import extendObj from '@/common/extends/vueObj.js'
import { openWin } from '@/common/core/app.js'
export default {
  name: 'demo',
  data: function () {
    return {
      num: 20,
      refreshing: false,
      loading: false,
      text: 'List'
    }
  },
  components: {},

  methods: {
    init () {

    }
  },
  extends: extendObj
}
</script>
<style  lang="less" rel="stylesheet/less">
  @import "../../assets/css/common.less";

</style>
