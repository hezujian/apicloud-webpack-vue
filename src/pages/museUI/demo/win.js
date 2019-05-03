import Vue, {obj, render}  from '@/common/extends/entryWin.js'
import App from './win.vue'
new Vue({
	...obj,
	render: h => render(h, App)
})
