<template>
    <article class="">
        <slider :cname="$style.slider" :items="items"></slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name:item.href}">
                    <img :src="item.img" :alt="item.title"><h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    import slider from '../core/slider';
    export default {
        name: "hslider",
        components : {
            slider
        },
        data(){
            return {
                items : [
                    {
                        href : "home",
                        src : require("../../image/slider-img-1.jpg")
                    },
                    {
                        href : "home",
                        src : require("../../image/slider-img-2.jpg")
                    },
                    {
                        href : "home",
                        src : require("../../image/slider-img-3.jpg")
                    }
                ],
                enters : [
                    {
                        img:require('../../image/8d8c35badacfc114.png'),
                        href : 'home',
                        title : '优惠券'
                    },
                    {
                        img:require('../../image/58d1e462Ncf294123.png'),
                        href : 'home',
                        title : '领红包'
                    },
                    {
                        img:require('../../image/58ec9dcdN1534e2d7.png'),
                        href : 'home',
                        title : '抢钢镚'
                    },
                    {
                        img:require('../../image/590ac8e8Ne9def22e.png'),
                        href : 'home',
                        title : '领京豆'
                    },
                    {
                        img:require('../../image/59224650N0f7ffc92.png'),
                        href : 'home',
                        title : '白条提额'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .slider{
        margin-top: 120px;
        img{
            width: 100%;
        }
    }
    .list{
        @include list(row);
        background-color: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;
        a{
            text-decoration: none;
        }
        .item{
            text-align: center;
            img{
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4{
                font-size: 26px;
                margin-top: 16px;
                color: #666;
            }
        }
    }
</style>