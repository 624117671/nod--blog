<template>
    <div id="app">
        <myhead class="myhead"/>
        <router-view></router-view>
    </div>
</template>
<script>
import myhead from './components/head'
    export default {
        name: 'app',
        components:{
            myhead
        }
    }
</script>
<style lang="less" scoped>
.myhead {
    position: fixed;
    top: 20px;
    // right: 20px;
    z-index: 520;
    width: 100%;
}
</style>
