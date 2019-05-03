import Vue from 'vue'
import theme from 'muse-ui/lib/theme';
import 'muse-ui/lib/styles/theme.less';
import 'muse-ui/lib/styles/base.less';

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