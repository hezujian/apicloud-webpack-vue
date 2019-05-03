<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" class="app-bar">
      <mu-button icon slot="left" @click="closeWin" v-if="!isHiddenLeft">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      {{title}}
      <mu-menu slot="right">
        <mu-button icon>
          <mu-icon value="color_lens"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="changeTheme(0)">
            <mu-list-item-content>
              <mu-list-item-title>白天模式</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button @click="changeTheme(1)">
            <mu-list-item-content>
              <mu-list-item-title>黑夜模式</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-menu slot="right">
        <mu-button icon>
          <mu-icon value="language"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="changeLanguage(0)">
            <mu-list-item-content>
              <mu-list-item-title>简体中文</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button @click="changeLanguage(1)">
            <mu-list-item-content>
              <mu-list-item-title>English</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="closeWin" v-if="!isHiddenLeft">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      {{title}}
    </mu-appbar>
  </div>
</template>
<script>
import extendObj from "@/common/extends/vueObj.js";
export default {
  props: {
    title: String,
    isHiddenLeft: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  data() {
    return {
      language: "",
      theme: ""
    };
  },
  components: {},
  methods: {
    closeWin() {
      api.closeWin();
    },
    changeLanguage(type) {},
    changeTheme(type) {}
  }
};
</script>
<style lang="less" rel="stylesheet/less">
@import "~@/assets/css/common.less";
.mu-menu-activator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.app-bar{
  position: fixed;
  top: -1px;
  left:0;
  width: 100vw;
  z-index: 9999999;
}
</style>
