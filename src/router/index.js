import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreeD from '@/components/ThreeD'
import Home from '../components/home/home.vue'
import Empty from '../components/home/empty.vue'
import Blank from '../components/home/blank.vue'
import Android from '../components/android/Android.vue'
import IOS from '../components/ios/Ios.vue'
import H5 from '../components/h5/H5.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Android
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/three',
      component: ThreeD
    },

    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/empty',
      component: Empty
    },
    {
      path: '/blank',
      component: Blank
    },
    {
      path: '/android',
      component: Android
    },
    {
      path: '/ios',
      component: IOS
    },
    {
      path: '/h5',
      component: H5
    },
  ]
})
