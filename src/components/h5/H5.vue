<!-- html-->
<template>
  <div class="wrapper">
    <div>
      {{count}}
    </div>
    <button class="bt" @click="btClick">open</button>

  </div>

</template>

<!--js-->
<script>
  export default {

    data() {
      return {}
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      btClick() {
        console.log('click')
      }
    },
    /**
     * 实例被创建之后执行代码
     */
    created: function () {

    },

  }

</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

  }

  .bt {
    width: 120px;
    text-align: center;
  }

</style>
