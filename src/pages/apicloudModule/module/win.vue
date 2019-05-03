<template>
  <div class="container">
		<div class="bg-primary header active" id="header">
      <mu-appbar color="primary">
        <mu-button icon slot="left" onclick="api.closeWin()">
            <mu-icon value="arrow_back"></mu-icon>
        </mu-button>
       {{title}}
      </mu-appbar>
    </div>
    <div class="content">
			<span class="play" tapmode="active" @click="showDefault" v-if="show">play</span>
		</div>
  </div>
</template>
<script>
import extendObj from "@/common/extends/vueObj.js";
import { openWin, openFrm } from "@/common/core/app.js";
export default {
  data: function() {
    return {
      title: "",
      indexPage: 0,
      show: false
    };
  },
  components: {},

  methods: {
    init() {
      var header = $api.byId("header");
      $api.fixIos7Bar(header);
      $api.fixStatusBar(header);
      var headerPos = $api.offset(header);
      window.__HEADER_H = headerPos.h;
      /* 根据传入的内容修改导航栏标题. */
      var module = api.pageParam["module"];
      this.title = module.name;

      api.showProgress({
        text: "请稍候..."
      });

      /* 何时显示运行按钮? */
      var delay = 0;

      if (true === api.pageParam.module.autoShow) {
        this.showDefault();
        delay = 1000;
      } else {
        this.show = true;
      }

      api.hideProgress();
    },
    loadScript(src, callback) {
      var script = document.createElement("script"),
        head = document.getElementsByTagName("head")[0];
      script.type = "text/javascript";
      script.charset = "UTF-8";
      script.src = src;
      if (script.addEventListener) {
        script.addEventListener(
          "load",
          function() {
            callback();
          },
          false
        );
      } else if (script.attachEvent) {
        script.attachEvent("onreadystatechange", function() {
          var target = window.event.srcElement;
          if (target.readyState == "loaded") {
            callback();
          }
        });
      }
      head.appendChild(script);
    },
    showDefault() {
      /* 获取传入的 module 对象. */
      var module = api.pageParam["module"];
      let filePath = "../../../assets/js/module/" + module.name + ".js";
      // let code = require("../../../assets/js/module/" + module.name + ".js");
      this.loadScript(filePath, function() {
        console.log("onload");
      });

      /* 界面类 和 功能类要移除按钮,以及部分模块. */
      if (
        (0 == module.sortId || 1 == module.sortId) &&
        ("actionButton" != module.name && "pullMenu" != module.name)
      ) {
        this.show = false;
      }
    }
  },
  extends: extendObj
};
</script>
<style lang="less" rel="stylesheet/less">
@import "~@/assets/css/common.less";
@import "./win.less";
</style>
