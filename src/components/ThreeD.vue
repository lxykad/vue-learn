<template>

  <div>
    <!--<model-collada src="static/models/collada/elf/elf.dae"></model-collada>-->

    <model-collada :rotation="{
          x: -Math.PI / 2,
          y: 0,
          z: 0
        }"
                   @on-mousemove="move"

                   src="static/models/collada/elf/elf.dae"></model-collada>
  </div>
</template>

<script>
  import {ModelCollada} from 'vue-3d-model'

  export default {
    components: {
      ModelCollada
    },
    methods:{
      move(event){
        console.log(event)
      }
    }
  }

  /* export default {
     name: 'demo-collada',
     data () {
       return {
         rotation: {
           x: -Math.PI / 2,
           y: 0,
           z: 0
         }
       }
     }
   }*/


</script>

<style scoped>

</style>
