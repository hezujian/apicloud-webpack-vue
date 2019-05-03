import Vue from 'vue'
import theme from 'muse-ui/lib/theme';
import 'muse-ui/lib/styles/theme.less';
import 'muse-ui/lib/styles/base.less';
import Helpers from 'muse-ui/lib/Helpers';

import {
	Icon,
	Button,
	AppBar,
	BottomNav,
	Menu,
	List,
} from 'muse-ui';

theme.addCreateTheme((theme) => {
  return `
  .bg-primary {
    background: ${theme.primary}
	}
	.theme-bg{
		background: ${theme.primary}
	}
  `
})
theme.use('light')
Vue.use(theme)
Vue.use(Icon)
Vue.use(Button)
Vue.use(AppBar)
Vue.use(BottomNav)
Vue.use(Helpers);
Vue.use(Menu)
Vue.use(List)

export default Vue;

export const obj ={
	el: '#app',
	mounted () {
		// You'll need this for renderAfterDocumentEvent.
		document.dispatchEvent(new Event('custom-render-trigger'))
	}
}

export const render = (createElement,App) =>{
	return createElement('div',{attrs:{id:'app'}},[createElement(App)])
}