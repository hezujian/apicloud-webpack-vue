<template>
  <div class="container">
    <slot></slot>
    <mu-scale-transition>
      <mu-button fab color="purple" class="back-top" @click="backTop($event)" v-show="show">
        <mu-icon value="arrow_upward"></mu-icon>
      </mu-button>
    </mu-scale-transition>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      show: false,
      isToBottom: false
    };
  },
  methods: {
    backTop(event) {
      const scrollEle =
        document.documentElement.scrollTop === 0
          ? document.body
          : document.documentElement;
      scrollEle.scrollTop = 0;
      this.show = false;
    },
    scroll() {
      var self = this;
      //窗口高度
      var clientHeight =
        document.documentElement.scrollTop === 0
          ? document.body.clientHeight
          : document.documentElement.clientHeight;
      //滚动距离
      var scrollTop =
        document.documentElement.scrollTop === 0
          ? document.body.scrollTop
          : document.documentElement.scrollTop;
      //内容总高度
      var scrollHeight =
        document.documentElement.scrollTop === 0
          ? document.body.scrollHeight
          : document.documentElement.scrollHeight;
      // console.log(clientHeight)
      // console.log(scrollTop)
      // console.log(clientHeight/3 <= scrollTop)
      if (clientHeight / 3 <= scrollTop) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  mounted() {
    window.onscroll = () => {
      this.scroll();
    };
  },
  destroyed() {
    // window.onscroll = null;
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.back-top {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 101;
}
</style>
