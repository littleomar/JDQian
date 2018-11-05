<template>
    <Panel title="广告" :class="$style.panel">
        <img :src="img_src[0]" alt="">
    </Panel>
</template>

<script>
    import Panel from "../core/panel";
    export default {
        name: "ad",
        components : {
            Panel
        },
        data(){
            return {
                img_src : [
                    require("../../image/eecb92594d88ba72.jpg")
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .panel{
        @include panel;
        >h4{
            display: none;
        }
        img{
            width: 100%;
            display: block;
        }
    }
</style>