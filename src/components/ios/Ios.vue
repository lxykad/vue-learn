<!-- html-->
<template>
  <div>
    {{count}}
    <button @click="clickBt" style="margin-left: 15px"> click</button>
  </div>


</template>

<!--js-->
<script>
  import {mapState, mapMutations} from 'vuex'

  export default {

    data() {
      return {}
    },

    /*
      mapState 写法
    * */
    computed: {

      count() {
        return this.$store.state.list.filter(data => data > 3)
      }
    },

    methods: {
      clickBt() {
        this.$store.commit('add2')
      }
    },
    /**
     * 实例被创建之后执行代码
     */
    created: function () {


    },

  }

</script>

<!--css-->
<style>

</style>
