<!-- html-->
<template>
  <div>
    <div v-for="item in list" style="padding: 10px;z-index: 10000">
      {{item.desc}}
    </div>

  </div>

</template>

<!--js-->
<script>

  import axios from 'axios'
  import Item from '../widget/list-item-android.vue'

  export default {

    // 导出组件
    components: {
      Item
    },

    data() {
      return {
        list: []
      }
    },
    methods: {
      click() {

      }
    },
    watch: {
      list: function (value, oldValue) {

      }
    },
    /**
     * 实例被创建之后执行代码
     */
    created: function () {
      axios.get('http://gank.io/api/data/Android/15/1')
        .then(res => {
          console.log(res.data.results.length)
          this.list = this.list.concat(res.data.results);
        })
        .catch(e => {
          console.log(e)
        })
    },

    destoryed: function () {

    },

  }

</script>

<!--css-->
<style>

</style>
