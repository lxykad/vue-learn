<template>

  <div>

    <model-collada :rotation=rotation
                   @on-load="move"
                   src="static/models/collada/elf/elf.dae"></model-collada>
  </div>
</template>

<script>
  import {ModelCollada} from 'vue-3d-model'

  export default {
    components: {
      ModelCollada
    },
    methods: {
      move(event) {
        this.rotate()
      },
      rotate () {
        this.rotation.z += 0.01;
        requestAnimationFrame( this.rotate );
      }
    },
    data() {
      return {
        rotation: {
          x: -Math.PI / 2,
          y: 0,
          z: 0
        }
      }
    }
  }

</script>

<style scoped>

</style>
