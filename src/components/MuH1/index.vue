<template>
  <h1 class="mu-h1"><slot></slot></h1>
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
<style lang="less" rel="stylesheet/less">
  .mu-h1 {
    padding-bottom: .3em;
    font-size: 2em;
    line-height: 1.25;
    margin: .7em 0;
    color: rgba(0,0,0,.54);
  }
</style>
