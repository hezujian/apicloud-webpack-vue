<template>
  <pre class="mu-pre"><code><slot></slot></code></pre>
</template>
<script>
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';
export default {
  data: function () {
    return {
      alert1: true
    }
  },
  mounted(){
    hljs.registerLanguage('javascript', javascript);
    hljs.initHighlightingOnLoad();
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .mu-pre {
    font-size: .9em;
  }
</style>
