<template>
  <div>
    <mu-header :title="title"></mu-header>
    <mu-page class="container">
    <mu-h1>使用</mu-h1>
    <mu-p>支持完整引入或者根据需要引入部分组件。 我们先介绍如何完整引入</mu-p>
    <mu-h2>完整引入</mu-h2>
    <mu-code>import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

new Vue({
  el: '#app',
  render (h) {
    return h('mu-button', {}, 'Hello World');
  }
});
    </mu-code>
    <mu-h2>按需引入</mu-h2>
    <mu-p>借助 , 我们可以只引入需要的组件，以达到减小项目体积的目的。 首先，安装 babel-plugin-import, less-loader:</mu-p>
    <mu-code>npm i babel-plugin-import less less-loader -D</mu-code>
    <mu-p>然后，将 .babelrc 修改为：</mu-p>
    <mu-code>{
  "plugins": [
    ["import", {
      "libraryName": "muse-ui",
      "libraryDirectory": "lib",
      "camel2DashComponentName": false
    }]
  ]
}
    </mu-code>
    <mu-p>接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容:</mu-p>
    <mu-code>import Vue from 'vue';
import 'muse-ui/lib/styles/base.less';
import { Button, Select } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Button);
Vue.use(Select);
    </mu-code>
    <mu-p>完整组件列表和引入方式</mu-p>
    <mu-code>import Vue from 'vue';
import 'muse-ui/lib/styles/base.less';
import {
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,
  BottomSheet,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  LoadMore,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Stepper,
  SubHeader,
  Switch,
  Tabs,
  TextField,
  Tooltip,
  theme
} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Alert);
Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Breadcrumbs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Chip);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Stepper);
Vue.use(SubHeader);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);
Vue.use(Tooltip);
    </mu-code>
    <mu-h2> 开始使用</mu-h2>
    <mu-p>至此，一个基于 Vue 和 Muse-UI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。</mu-p>
  </mu-page>
  </div>
</template>
<script>
import extendObj from "@/common/extends/vueObj.js";
import { openFrm, retRul } from "@/common/core/app.js";
import MuH1 from "@/components/MuH1";
import MuH2 from "@/components/MuH2";
import MuP from "@/components/MuP";
import MuCode from "@/components/MuCode";
import MuPage from "@/components/MuPage";
import MuHeader from "@/components/Header";
export default {
  data: function() {
    return {
      title: '使用'
    };
  },
  components: {
    MuH1,
    MuH2,
    MuP,
    MuCode,
    MuPage,
    MuHeader,
  },
  methods: {
    init() {}
  },
  extends: extendObj
};
</script>
<style lang="less" rel="stylesheet/less">
@import "~@/assets/css/common.less";
</style>
