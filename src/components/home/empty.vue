<!-- html-->
<template>
  <router-link to="/main">
    <button>empty</button>
  </router-link>

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

    },

    mounted: function () {
    },

    destoryed: function () {
    },
  }

</script>

<!--css-->
<style>

</style>
