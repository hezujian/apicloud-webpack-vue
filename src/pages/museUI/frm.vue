<template>
  <div class="container">
    <mu-grid-list class="grid-list" :cell-height="100" :cols="3" :padding="0">
      <mu-sub-header>风格</mu-sub-header>
      <mu-grid-tile :rows="1" v-for="(item,index) in styles" :key="index">
        <mu-ripple class="grid-item" @click="item.click">
          <mu-icon :value="item.icon" color="blue"></mu-icon>
          <span>{{item.title}}</span>
        </mu-ripple>
      </mu-grid-tile>
    </mu-grid-list>

    <mu-grid-list class="grid-list" :cell-height="100" :cols="3" :padding="0">
      <mu-sub-header>工具</mu-sub-header>
      <mu-grid-tile :rows="1" v-for="(item,index) in tools" :key="index">
        <mu-ripple class="grid-item" @click="item.click">
          <mu-icon :value="item.icon" color="blue"></mu-icon>
          <span>{{item.title}}</span>
        </mu-ripple>
      </mu-grid-tile>
    </mu-grid-list>

    <mu-grid-list class="grid-list" :cell-height="100" :cols="3" :padding="0">
      <mu-sub-header>插件</mu-sub-header>
      <mu-grid-tile :rows="1" v-for="(item,index) in plugs" :key="index">
        <mu-ripple class="grid-item" @click="item.click">
          <mu-icon :value="item.icon" color="blue"></mu-icon>
          <span>{{item.title}}</span>
        </mu-ripple>
      </mu-grid-tile>
    </mu-grid-list>

    <mu-grid-list class="grid-list" :cell-height="100" :cols="3" :padding="0">
      <mu-sub-header>表单</mu-sub-header>
      <mu-grid-tile :rows="1" v-for="(item,index) in forms" :key="index">
        <mu-ripple class="grid-item" @click="item.click">
          <mu-icon :value="item.icon" color="blue"></mu-icon>
          <span>{{item.title}}</span>
        </mu-ripple>
      </mu-grid-tile>
    </mu-grid-list>

    <mu-grid-list class="grid-list" :cell-height="100" :cols="3" :padding="0">
      <mu-sub-header>常用组件</mu-sub-header>
      <mu-grid-tile :rows="1" v-for="(item,index) in list" :key="index">
        <mu-ripple class="grid-item" @click="item.click">
          <mu-icon :value="item.icon" color="blue"></mu-icon>
          <span>{{item.title}}</span>
        </mu-ripple>
      </mu-grid-tile>
    </mu-grid-list>

    <mu-grid-list class="grid-list" :cell-height="100" :cols="3" :padding="0">
      <mu-sub-header>自定义组件</mu-sub-header>

    </mu-grid-list>

  </div>
</template>
<script>
import extendObj from '@/common/extends/vueObj.js'
import { openWin } from '@/common/core/app.js'
export default {
  data: function () {
    var self = this
    return {
      open: 'send',
      styles: [
        {
          title: 'color',
          icon: 'format_color_text',
          click: () => {
            self.openWin('color')
          }
        }, {
          title: 'theme',
          icon: 'assignment',
          click: () => {
            self.openWin('theme')
          }
        }, {
          title: 'icon',
          icon: 'all_out',
          click: () => {
            self.openWin('icon')
          }
        }, {
          title: 'typography',
          icon: 'short_text',
          click: () => {
            self.openWin('typography')
          }
        }, {
          title: 'layout',
          icon: 'filter_none',
          click: () => {
            self.openWin('layout')
          }
        }, {
          title: 'grid',
          icon: 'grid_on',
          click: () => {
            self.openWin('grid')
          }
        }
      ],
      tools: [
        {
          title: 'transitions',
          icon: 'crop_square',
          click: () => {
            self.openWin('transitions')
          }
        }, {
          title: 'directives',
          icon: 'mouse',
          click: () => {
            self.openWin('directives')
          }
        }, {
          title: 'ripple',
          icon: 'fingerprint',
          click: () => {
            self.openWin('ripple')
          }
        }
      ],
      plugs: [
        {
          title: 'plugin',
          icon: 'memory',
          click: () => {
            self.openWin('plugin')
          }
        }, {
          title: 'toast',
          icon: 'filter_list',
          click: () => {
            self.openWin('toast')
          }
        }, {
          title: 'message',
          icon: 'message',
          click: () => {
            self.openWin('message')
          }
        }, {
          title: 'loading',
          icon: 'more_horiz',
          click: () => {
            self.openWin('loading')
          }
        }, {
          title: 'nprogress',
          icon: 'trending_flat',
          click: () => {
            self.openWin('nprogress')
          }
        }
      ],
      forms: [
        {
          title: 'form',
          icon: 'border_all',
          click: () => {
            self.openWin('form')
          }
        }, {
          title: 'date',
          icon: 'date_range',
          click: () => {
            self.openWin('date-input')
          }
        }, {
          title: 'select',
          icon: 'select_all',
          click: () => {
            self.openWin('select')
          }
        }, {
          title: 'select-control',
          icon: 'new_releases',
          click: () => {
            self.openWin('select-control')
          }
        }, {
          title: 'text-field',
          icon: 'short_text',
          click: () => {
            self.openWin('text-field')
          }
        }, {
          title: 'auto-complete',
          icon: 'input',
          click: () => {
            self.openWin('auto-complete')
          }
        }
      ],
      list: [
        {
          title: 'alert',
          icon: 'warning',
          click: () => {
            self.openWin('alert')
          }
        }, {
          title: 'appBar',
          icon: 'drag_handle',
          click: () => {
            self.openWin('appbar')
          }
        }, {
          title: 'avatar',
          icon: 'image',
          click: () => {
            self.openWin('avatar')
          }
        }, {
          title: 'badge',
          icon: 'lens',
          click: () => {
            self.openWin('badge')
          }
        }, {
          title: 'bottom-navigation',
          icon: 'navigation',
          click: () => {
            self.openWin('bottom-navigation')
          }
        }, {
          title: 'sheet',
          icon: 'playlist_add',
          click: () => {
            self.openWin('bottom-sheet')
          }
        }, {
          title: 'button',
          icon: 'radio_button_unchecked',
          click: () => {
            self.openWin('button')
          }
        }, {
          title: 'card',
          icon: 'credit_card',
          click: () => {
            self.openWin('card')
          }
        }, {
          title: 'carousel',
          icon: 'view_carousel',
          click: () => {
            self.openWin('carousel')
          }
        }, {
          title: 'chip',
          icon: 'toc',
          click: () => {
            self.openWin('chip')
          }
        }, {
          title: 'table',
          icon: 'border_all',
          click: () => {
            self.openWin('data-table')
          }
        }, {
          title: 'dialog',
          icon: 'chat_bubble_outline',
          click: () => {
            self.openWin('dialog')
          }
        }, {
          title: 'drawer',
          icon: 'chrome_reader_mode',
          click: () => {
            self.openWin('drawer')
          }
        }, {
          title: 'list',
          icon: 'list',
          click: () => {
            self.openWin('list')
          }
        }, {
          title: 'load-more',
          icon: 'more_horiz',
          click: () => {
            self.openWin('load-more')
          }
        }, {
          title: 'menu',
          icon: 'menu',
          click: () => {
            self.openWin('menu')
          }
        }, {
          title: 'date-picker',
          icon: 'date_range',
          click: () => {
            self.openWin('date-picker')
          }
        }, {
          title: 'time-picker',
          icon: 'update',
          click: () => {
            self.openWin('time-picker')
          }
        }, {
          title: 'popover',
          icon: 'toll',
          click: () => {
            self.openWin('popover')
          }
        }, {
          title: 'progress',
          icon: 'trending_flat',
          click: () => {
            self.openWin('progress')
          }
        }, {
          title: 'slide-picker',
          icon: 'texture',
          click: () => {
            self.openWin('slide-picker')
          }
        }, {
          title: 'slider',
          icon: 'lens',
          click: () => {
            self.openWin('slider')
          }
        }, {
          title: 'snackbar',
          icon: 'wrap_text',
          click: () => {
            self.openWin('snackbar')
          }
        }, {
          title: 'stepper',
          icon: 'redo',
          click: () => {
            self.openWin('stepper')
          }
        }, {
          title: 'subheader',
          icon: 'supervisor_account',
          click: () => {
            self.openWin('subheader')
          }
        }, {
          title: 'tabs',
          icon: 'tab',
          click: () => {
            self.openWin('tabs')
          }
        }
      ]
    }
  },
  components: {},

  methods: {
    openWin: function (path) {
//        openWin(`https://muse-ui.org/#/zh-CN/${path}`)
      openWin(`museUI/demo`, {
        path
      })
    },
    init () {
      api.toast({msg:'kjsflksdjflkdsj'})
    }
  },
  extends: extendObj
}
</script>
<style lang="less" rel="stylesheet/less">
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
    background: none !important;
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
