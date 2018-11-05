<template>
    <Panel title="生活服务" :class="$style.panel">
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in items" :key="item.title">
                <router-link :to="{name:item.href}">
                    <img :src="item.img" :alt="item.title"><p>{{item.title}}</p><p>{{item.intro}}</p>
                </router-link>
            </div>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel';
    export default {
        name: "life",
        components : {
            Panel
        },
        data(){
            return {
                items : [
                    {
                        img : require('../../image/6275b5c0b703416a.png'),
                        title : '机票',
                        href : 'home'
                    },
                    {
                        img : require('../../image/2622695db5d0128b.png'),
                        title : '租房',
                        href : 'home',
                        intro : "房房房"
                    },
                    {
                        img : require('../../image/b28774eadc4e1527.png'),
                        title : '房抵贷',
                        href : 'home'
                    },
                    {
                        img : require('../../image/413fed46004f96e7.png'),
                        title : '分期用',
                        href : 'home'
                    },
                    {
                        img : require('../../image/36437307167c7071.png'),
                        title : '分期商城',
                        href : 'home'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .panel{
        @include panel;
        .list{
            @include flex(row);
            padding-bottom: 40px;
            a{
                text-decoration: none;
            }
            .item{
                box-sizing: border-box;
                width: 20%;
                text-align: center;
                img{
                    width: 90px;
                    height: 90px;
                    display: inline-block;
                }
                p{
                    font-size: 26px;
                    color: #666;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    margin-top: 12px;
                    &:nth-of-type(2){
                        color: #ff801a;
                    }
                }
            }
        }
    }

</style>