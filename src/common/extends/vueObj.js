import {openWin} from '@/common/core/app.js'

export default {
	created: function () {
		window.__APIREADY = () => this.init()
	},
	methods: {
		openWin: function (name, pageParam) {
			openWin(name, pageParam)
		}
	}
}
