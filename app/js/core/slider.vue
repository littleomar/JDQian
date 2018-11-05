<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.src">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import { swiper , swiperSlide } from "vue-awesome-swiper";
    export default {
        name: "slider",
        components : {
            swiper,
            swiperSlide,
        },
        props : {
            options : {
                type: Object,
                default(){
                    return {
                        autoplay:true,
                        loop:true,
                        pagination : {
                            el : ".swiper-pagination"
                        },
                        notNextTick : false
                    }
                }
            },
            cname : {
                type : String,
                default : ""
            },
            items : {
                type : Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style lang="css">
    @import "~swiper/dist/css/swiper.css";
</style>