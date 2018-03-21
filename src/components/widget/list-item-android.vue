<!-- html-->
<template>

  <div id="container">
    <div>title</div>
    <div>desc</div>
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

      }
    },
    watch: {
      a: function (value, oldValue) {

      }
    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {


    },

    destoryed: function () {

    },

  }

</script>

<!--css-->
<style>
  #container {
    display: flex;
    flex-direction: column;
  }

</style>
