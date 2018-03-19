<!-- html-->
<template>
  <div>
    <!-- <button v-on:click="click">{{a}}</button>

     <router-link to="/three">
       <div id="text">3d</div>
     </router-link>

     <router-link to="/hello" target='_blank'> 新页面 </router-link>

     <button @click="go">go</button>

     <transition name="fade" mode="out-in">
       <router-view></router-view>
     </transition>-->
    <ul>
      <li v-for="item in list"><button @click="jump(item.route)">{{item.name}}</button></li>
    </ul>
    <router-view></router-view>

  </div>

</template>

<!--js-->
<script>
  export default {

    data() {
      return {
        a: 1,
        list: [
          {
            name: 'hello',
            route: '/hello'
          },
          {
            name: 'empty',
            route: '/empty'
          },
          {
            name: 'three',
            route: '/three'
          }
        ]
      }
    },
    methods: {
      click() {
        this.a++
      },
      go() {
        console.log('go')
        this.$router.push('/empty')
      },
      jump(index) {
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
    align-items: center;

  }

  button {
    padding: 5px 10px;
    margin-top: 10px;
  }

  #text {
    margin-top: 10px;
  }

  router-view {
    display: flex;
    background-color: aqua;
    width: 100%;
    height: 100%;

  }

</style>
