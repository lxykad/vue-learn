import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreeD from '@/components/ThreeD'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ThreeD',
      component: ThreeD
    }
  ]
})
