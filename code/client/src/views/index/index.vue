<template>
    <div class="index" :style="{backgroundImage: 'url(' + bg2 + ')','height':fh+'px' }">
        <one style="width:100%;height:100%"/>
    </div>
</template>
<script>
import bg2 from '../../images/bg.jpg'
import one from './pageOne.vue'
export default {
    data () {
        return {
            bg2:bg2,
            fh:document.documentElement.clientHeight
        }
    },
    components : {
        one
    }
}
</script>
<style lang="less" scoped>
.index{
    width: 100%;
    background-attachment: fixed;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
