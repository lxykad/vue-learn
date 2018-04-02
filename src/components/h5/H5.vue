<!-- html-->
<template>
  <div>{{count}}</div>

</template>

<!--js-->
<script>
  export default {

    data() {
      return {

      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      click() {

      }
    },
    /**
     * 实例被创建之后执行代码
     */
    created: function () {

      console.log('home created')
    },

  }

</script>

<!--css-->
<style>

</style>
