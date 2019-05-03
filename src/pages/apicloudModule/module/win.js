import Vue, {obj, render}  from '@/common/extends/entryWin.js'
import App from './win.vue'
import {
	AppBar,
	Button,
	Icon
} from 'muse-ui';
Vue.use(AppBar);
Vue.use(Button);
Vue.use(Icon);

new Vue({
	...obj,
	render: h => render(h, App)
})
