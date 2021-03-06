import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import "normalize.css/normalize.css";
import './utils/rem'
import "vant/lib/index.css";
import formatDate from './utils/formatDate'


import * as Element from 'element-ui'
import "element-ui/lib/theme-chalk/base.css"; // fade style
import "element-ui/lib/theme-chalk/index.css";

import hljs from 'highlight.js'

import '@/styles/index.scss'

/**
 * vant 引入的全局注册的公共组件
 * van-list、van-loading...
 */
import list from "vant/lib/list"
import loading from "vant/lib/loading"
import empty from "vant/lib/empty"
import sticky from "vant/lib/sticky"
import tabs from "vant/lib/tabs"
import tab from "vant/lib/tab"
import swipe from "vant/lib/swipe"
import swipeItem from "vant/lib/swipe-item"
import skeleton from "vant/lib/skeleton"
const VantComps: any = {
  list,
  loading,
  empty,
  sticky,
  tabs,
  tab,
  swipe,
  swipeItem,
  skeleton,
};
Object.keys(VantComps).map((key) => { 
  Vue.component(`van-${key}`, VantComps[key]) 
})

Vue.prototype.formatDate = formatDate
Vue.config.productionTip = false;
Vue.use(Element);

/**
 * 注册全局指令
 * v-highlight
 */
import "highlight.js/styles/github.css";
Vue.directive('highlight', function (el) {
  let highlight = el.querySelectorAll('pre code')
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
