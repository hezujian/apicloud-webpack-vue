<template>
  <div class="bg-primary header" id="header">
    <mu-appbar   color="primary">
      
      <mu-button icon slot="left" onclick="api.closeWin()">
          <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      {{title}}
    </mu-appbar>
  </div>
</template>
<script>
import extendObj from "@/common/extends/vueObj.js";
import { openFrm, retRul } from "@/common/core/app.js";
import dataSource from "./assets/dataSource";
import { openWinFun } from "@/common/core/app.js";

export default {
  data: function() {
    return {
      title: ""
    };
  },
  methods: {
    init() {
      // -----------------------------------------
      /* 导航栏自适应iOS 7. */
      var header = $api.byId("header");
      $api.fixIos7Bar(header);
      $api.fixStatusBar(header);
      var headerPos = $api.offset(header);

      /* 一个关闭窗口,返回上一级页面的优雅实现. */
      window.closeWin = function(winName) {
        api.closeWin();
      };

      /* Android,点击返回键,可以返回上一级. */
      window.addEventListener("keyback", function() {
        window.addEventListener("keyback", function() {
          if (!api["pageParam"]["isFrame"]) {
            // 仅在是主窗口时,才捕捉 keyback事件.
            window.closeWin();
          }
        });
      });

      /* 根据当前模块分类动态改变标题. */
      var sortId = api["pageParam"]["sortId"];

      var sortBrief = "";

      for (var idx in dataSource["sorts"]) {
        var sort = dataSource["sorts"][idx];

        if (sortId == sort["id"]) {
          sortBrief = sort["brief"];
          break;
        }
      }

      if (!sortBrief) {
        // 说明此分类为无效分类.默默返回即可.
        return;
      }

      this.title = sortBrief;

      /* 根据模块列别 id 取得此类别下的所有的模块的详细信息,并升序排列 */
      var modules = [];

      var modulesDict = {};

      for (var idx in dataSource["modules"]) {
        var module = dataSource["modules"][idx];
        if (sortId == module["sortId"]) {
          /* android 下, 几个模块暂不做展示. */
          if ("ios" != api.systemType) {
            if (
              "slider" == module["name"] ||
              "pullMenu" == module["name"] ||
              "bookReader" == module["name"]
            ) {
              continue;
            }
          }

          modules.push(module);
        }
      }

      /* 排序: 根据模块名称升序排列. */
      modules = modules.sort(function(moduleA, moduleB) {
        if (moduleA["name"].toUpperCase() < moduleB["name"].toUpperCase()) {
          return -1;
        }

        return 1;
      });

      /* 根据模块信息生成 listView .*/
      var listViewData = [];

      for (var idx in modules) {
        var module = modules[idx];
        var listViewItem = {
          placeHoldImg: "widget://icon/" + module["name"] + ".png",
          title: module["name"],
          subTitle: module["brief"],
          titleColor: "#666666",
          titleSize: "14px",
          subTitleColor: "#999999",
          subTitleSize: "12px"
        };

        listViewData.push(listViewItem);
      }

      var listview = api.require("listView");

      listview.open(
        {
          x: 0,
          y: headerPos.h + 1,
          w: api.frameWidth,
          h: api.frameHeight - headerPos.h,
          rightBtn: [
            {
              color: "#52C09A",
              title: "查看",
              selecteColor: "#429b7c"
            },
            {
              color: "#E76B65",
              title: "关闭",
              selecteColor: "#bc534d"
            }
          ],
          borderColor: "#CCCCCC",
          cellBgColor: "#FFFFFF",
          cellSelectColor: "#E9E9E9",
          cellHeight: 60,
          leftBg: "#e9e9e9",
          rightBg: "#e9e9e9",
          data: listViewData
        },
        function(ret, err) {
          if ((1 != ret.btnIndex && ret.index) || ret.index == 0) {
            // alert(ret.index)
            // 说明是关闭按钮.
            var module = modules[ret["index"]];

            var delay = 0;

            if ("ios" != api.systemType) {
              delay = 300;
            }
            let openWin = openWinFun({
              bounces: false,
              vScrollBarEnabled: false,
              hScrollBarEnabled: false,
              reload: true,
              delay: delay
            });

            openWin("apicloudModule/module", {
              module: module
            });
          }
        }
      );
    }
  },
  extends: extendObj
};
</script>
<style lang="less" rel="stylesheet/less">
@import "~@/assets/css/common.less";
</style>
