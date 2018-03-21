// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Home from './components/home/home.vue'
import Hello from './components/HelloWorld.vue'
import HomePage from './components/main/HomePage.vue'

import TabBar from './components/widget/tabBar.js'

// muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

Vue.config.productionTip = false

// 注册自定义组件--全局
Vue.use(TabBar)

// 创建根实例
new Vue({
  el: '#app',
  router,
  components: {HomePage},
  template: '<homePage/>',
})
