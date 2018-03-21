<!-- html-->
<template>
  <mu-paper class="bottom-tab">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="android" title="Android" icon="ondemand_video"/>
      <mu-bottom-nav-item value="ios" title="IOS" icon="music_note"/>
      <mu-bottom-nav-item value="three" title="3D" icon="books"/>
      <mu-bottom-nav-item value="h5" title="前端" icon="photo"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: 'android',
        bottomNavColor: 'android'
      }
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val
        this.$router.push(val)
      }
    }
  }

</script>

<style>
  .bottom-tab {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

</style>
