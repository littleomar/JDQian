<template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div class="arrow">更多尖货 ></div>
            <Slider :items="items" :options="options" cname="product-slider"></Slider>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel';
    import Slider from "../core/slider";
    export default {
        name: "product",
        components : {
            Panel,
            Slider
        },
        data(){
            return {
                items: [
                    {
                        href : "home",
                        src : require("../../image/5bc43fd0Nac95eb04.jpg")
                    },
                    {
                        href : "home",
                        src : require("../../image/5bc43fdeN03255b3a.jpg")
                    },
                    {
                        href : "home",
                        src : require("../../image/5bc43fedNc8cfd19d.jpg")
                    }
                ],
                options :{
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            }
        }
    }
</script>

<style lang="scss">
    .product-slider{
        .swiper-container{
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-slide{
                a{
                    display: inline-block;
                    width: 100%;
                    img{
                        width: 100%;
                        display: block;
                        height: 420px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element";
    .panel{
        @include panel;
        .content{
            padding-bottom: 40px;
            position: relative;
            &>div{
                position: absolute;
                font-size: 28px;
                color: #999;
                right: 20px;
                top: -70px;
            }
        }
    }
</style>