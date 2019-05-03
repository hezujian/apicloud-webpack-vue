import Vue, {obj, render}  from '@/common/extends/entryFrm.js'
import App from './frm.vue'
import {
	Icon,
	Grid,
	GridList,
	SubHeader
} from 'muse-ui';
import Helpers from 'muse-ui/lib/Helpers';
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(SubHeader);
Vue.use(Helpers);

new Vue({
	...obj,
	render: h => render(h, App)
})
