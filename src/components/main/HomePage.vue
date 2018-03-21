<!-- html-->
<template>
  <div id="container">
    <!--<div id="container">
      <div v-for="item in list" @click="click(item.route)">

        <button>{{item.name}}</button>

      </div>

    </div>

    <router-view></router-view>-->

    <router-view></router-view>
    <bottom-tab id="bottom-tab"></bottom-tab>

  </div>

</template>

<!--js-->
<script>
  //导入需要的组件
  import BottomTab from '../bottom-tab/BottomTab.vue'


  export default {

    // 导出组件
    components: {
      BottomTab
    },

    data() {
      return {
        a: 1,
        list: [
          {
            name: 'android',
            route: '/hello'
          },
          {
            name: 'ios',
            route: '/empty'
          },
          {
            name: 'blank',
            route: '/blank'
          }
        ]
      }
    },
    methods: {
      click(index) {
        this.a++
        this.$router.push(index)
      }
    },
    watch: {
      a: function (value, oldValue) {

      }
    },

    beforeCreate: function () {

      console.log('home before created')
    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {

      console.log('home created')
    },

    mounted: function () {
      console.log('home mounted')
    },

    destoryed: function () {
      console.log('home destoryed')
    },

  }

</script>

<!--css-->
<style>

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

  }

</style>
