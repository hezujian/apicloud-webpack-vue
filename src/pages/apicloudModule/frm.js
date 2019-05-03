import Vue, {obj, render}  from '@/common/extends/entryWin.js'
import App from './frm.vue'
import {
	Icon,
	Grid,
	GridList,
	SubHeader
} from 'muse-ui';
Vue.use(Grid);
Vue.use(GridList);
Vue.use(SubHeader);
Vue.use(Icon)
new Vue({
	...obj,
	render: h => render(h, App)
})
