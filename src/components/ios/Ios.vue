<!-- html-->
<template>
  <div class="ios-wrapper">
    <div>
      {{count}}
    </div>
    <div>
      {{list}}
    </div>
    <div>
      {{sortlist}}
    </div>
    <div>
      {{name}}
    </div>

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

      list() {
        return this.$store.state.list
      },
      count() {
        return this.$store.state.count
      },
      sortlist() {
        return this.$store.getters.sortList
      },
      name() {
        return this.$store.state.name
      }
    },

    methods: {
      clickBt() {
       // this.$store.commit('add', 5)
       // this.$store.commit('setList')
        this.$store.dispatch('set')
          .then(()=>{
            this.$store.commit('add', 5)
              console.log('then')
          })
      }
    },
    /**
     * 实例被创建之后执行代码
     */
    created: function () {


    },

  }

</script>

<style>
  .ios-wrapper {
    display: flex;
    flex-direction: column;
  }

</style>
