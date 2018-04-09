<!-- html-->
<template>
  <div class="wrapper">
    <div>
      {{count}}
    </div>
    <button class="bt" @click="btClick">open</button>

    <button @click="transRight"> trans </button>

    <transition name="bounce">
      <p v-show="rightShow">right</p>
    </transition>

  </div>

</template>

<!--js-->
<script>
  export default {

    data() {
      return {
        rightShow: true
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      btClick() {
        console.log('click')
      },
      transRight() {
        this.rightShow = !this.rightShow
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
  .fade-enter-active,.fade-leave-active{
    transition: opacity 3s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }


</style>
