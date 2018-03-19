<!-- html-->
<template>
  <div id="container">
    <button v-on:click="click">{{a}}</button>

    <router-link to="/three">
      <div id="text">55555</div>
    </router-link>

    <router-link to="/hello"> 带参跳转 </router-link>
    <button @click="go">go</button>
    <transition name="slide">
      <router-view></router-view>
    </transition>

  </div>

</template>

<!--js-->
<script>
  export default {

    data() {
      return {
        a: 1
      }
    },
    methods: {
      click() {
        this.a++
      },
      go() {
        console.log('go')
        this.$router.push('/hello')
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

  }

</style>
