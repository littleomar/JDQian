<template>
    <article class="">
        <slider :cname="$style.slider" :items="items"></slider>
    </article>
</template>

<script>
    import slider from '../core/slider';
    export default {
        name: "mslider",
        components : {
            slider
        },
        data(){
            return {
                items : [
                    {
                        href : "home",
                        src : require("../../image/2c9a4b56d7aa6349.jpg")
                    },
                    {
                        href : "home",
                        src : require("../../image/45a4bb24a65bf0fb.png")
                    },
                    {
                        href : "home",
                        src : require("../../image/d7bb28f3834497c7.jpg")
                    },
                    {
                        href : "home",
                        src : require("../../image/8af7ff35c831bc6c.jpg")
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .slider{
        margin-top: 100px;
        img{
            width: 100%;
        }
    }
</style>