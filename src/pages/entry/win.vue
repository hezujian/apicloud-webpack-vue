<template>
  <div class="container">
    <div class="bg-primary header active" id="header0">
      <mu-appbar color="primary">
        <div class="title" slot="default">muse-UI</div>
      </mu-appbar>
    </div>
    <div class="bg-primary header" id="header1">
      <mu-appbar color="primary">
        <div class="title" slot="default">apicloud原生模块</div>
      </mu-appbar>
    </div>
    <div class="bg-primary header" id="header2">
      <mu-appbar color="primary">
        <div class="title" slot="default">demo</div>
      </mu-appbar>
    </div>

    <div class="content">
    </div>

    <div id="footer">
      <mu-bottom-nav @change="itemChange">
        <mu-bottom-nav-item title="muse-ui" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="apicloud" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="demo" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
  </div>
</template>
<script>
import extendObj from "@/common/extends/vueObj.js";
import { retRul } from "@/common/core/app.js";
import { login } from "@/common/core/request.js";
export default {
  data: function() {
    return {
      showIndex: 0
    };
  },
  methods: {
    itemChange: function(index) {
      let header = $api.byId("header" + index);
      let headers = $api.domAll(".header");
      for (var i = 0, len = headers.length; i < len; i++) {
        $api.removeCls(headers[i], "active");
      }
      console.log(header)
      $api.addCls(header, "active");
      $api.fixStatusBar(header);
      let headerPos = $api.offset(header);
      let footerPos = $api.offset($api.byId("footer"));


      api.setFrameGroupAttr({
        name: "group1",
        rect: {
          marginTop: headerPos.h,
          marginBottom: footerPos.h,
          w: "auto"
        }
      });

      
      api.setFrameGroupIndex({
        name: "group1",
        index: index
      });
    },
    init() {
      //      login({
      //        username: '13627665527',
      //        password: '12'
      //      }, function (ret) {
      //        alert(JSON.stringify(ret))
      //      })
      let headers = $api.byId("header0");
      $api.fixStatusBar(headers);
      let headerPos = $api.offset(headers);
      let footerPos = $api.offset($api.byId("footer"));
      api.openFrameGroup(
        {
          name: "group1",
          rect: {
            marginTop: headerPos.h + 6,
            marginBottom: footerPos.h,
            w: "auto"
          },
          preload:2,
          frames: [
            {
              name: "museUI",
              url: retRul("museUI/frm.html")
            },
            {
              name: "apicloudModule",
              url: retRul("apicloudModule/frm.html")
            },
            {
              name: "home1",
              url: retRul("mine/frm.html")
            }
          ]
        },
        function(ret, err) {
          // alert(ret)
        }
      );
      api.addEventListener(
        {
          name: "keyback"
        },
        function(ret, err) {
          api.closeWidget();
        }
      );
    }
  },
  extends: extendObj
};
</script>
<style lang="less" rel="stylesheet/less">
@import "~@/assets/css/common.less";
@import "./win.less";
</style>
