<template>
  <div class="container">
    <mu-grid-list class="grid-list" :cell-height="100" :cols="3" :padding="0">
      <mu-sub-header>apicloud模块</mu-sub-header>
      <mu-grid-tile :rows="1" v-for="(item,index) in list" :key="index">
        <mu-ripple class="grid-item" @click="item.click">
          <mu-icon :value="item.icon" color="blue"></mu-icon>
          <span>{{item.title}}</span>
        </mu-ripple>
      </mu-grid-tile>
    </mu-grid-list>
  </div>
</template>
<script>
import extendObj from "@/common/extends/vueObj.js";
import { openWinFun } from "@/common/core/app.js";
export default {
  name: "demo",
  data: function() {
    const self = this;
    return {
      list: [
        {
          title: "界面",
          icon: "format_color_text",
          click: () => {
            self.openPage(0);
          }
        },
        {
          title: "导航菜单",
          icon: "format_color_text",
          click: () => {
            self.openPage(1);
          }
        },
        {
          title: "功能",
          icon: "format_color_text",
          click: () => {
            self.openPage(2);
          }
        },
        {
          title: "设备",
          icon: "format_color_text",
          click: () => {
            self.openPage(3);
          }
        },
        {
          title: "api对象",
          icon: "format_color_text",
          click: () => {
            self.openPage(4);
          }
        },
        {
          title: "开放SDK",
          icon: "format_color_text",
          click: () => {
            self.openPage(5);
          }
        }
      ]
    };
  },
  components: {},

  methods: {
    openPage(sortId) {
      var delay = 0;

      if ("ios" !== api.systemType) {
        delay = 300;
      }
      let openWin = openWinFun({
        vScrollBarEnabled: false,
        hScrollBarEnabled: false,
        delay: delay
      });

      openWin("apicloudModule/sort", {
        sortId: sortId
      });
    },
    init() {
      var header = $api.byId("header");
      $api.fixStatusBar(header);
    }
  },
  extends: extendObj
};
</script>
<style  lang="less" rel="stylesheet/less">
@import "~@/assets/css/common.less";

  .container {
    padding: 0;
  }

  .grid-list {

  }

  .mu-sub-header {
    border-bottom: 1px #eee solid;
    background: #eee;
  }

  .mu-grid-tile-titlebar {
    display: none !important;
  }

  .grid-item {
    height: 100%;
    background: #fff;
    border: 1px #eee solid;
    border-left: none;
    border-top: none;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  span {
    margin-top: 10px;
  }

  }
</style>
