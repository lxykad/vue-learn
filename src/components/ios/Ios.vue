<!-- html-->
<template>
    <div>ios</div>

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
                this.a++
            }
        },
        watch: {
            a: function (value, oldValue) {

            }
        },

        beforeCreate: function () {

            console.log('home before created')
        },

        /**
         * 实例被创建之后执行代码
         */
        created: function () {

            console.log('home created')
        },

        mounted: function () {
            console.log('home mounted')
        },

        destoryed: function () {
            console.log('home destoryed')
        },

    }

</script>

<!--css-->
<style>

</style>
