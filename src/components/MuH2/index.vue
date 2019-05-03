<template>
  <h2 class="mu-h2"><slot></slot></h2>
</template>
<script>
export default {
  data: function () {
    return {
      alert1: true
    }
  },
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .mu-h2 {
    margin-top: 1em;
    margin-bottom: 16px;
    font-weight: 400;
    color: rgba(0,0,0,.54);
    padding-bottom: .3em;
    font-size: 1.5em;
    line-height: 1.334;
  }
</style>
