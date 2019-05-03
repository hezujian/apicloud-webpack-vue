import Vue, {obj, render}  from '@/common/extends/entryWin.js'
import App from './win.vue'
import {
	AppBar,
	BottomNav
} from 'muse-ui';
Vue.use(AppBar);
Vue.use(BottomNav);

new Vue({
	...obj,
	render: h => render(h, App)
})
