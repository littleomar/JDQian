<template>
    <Panel title="导航" :class="$style.panel">
        <ul>
            <li>
                <router-link :to="{name:'home'}">
                    <i class="fa fa-home"></i>
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'money'}">
                    <i class="fa fa-yen"></i>
                    <p>理财</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'home'}">
                    <i class="fa fa-file"></i>
                    <p>白条</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'home'}">
                    <i class="fa fa-shopping-bag"></i>
                    <p>众筹</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'home'}">
                    <i class="fa fa-user"></i>
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from "../core/panel";
    export default {
        name: "navbar",
        components : {
            Panel
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .panel{
        @include panel;
        position: fixed;
        z-index: 200;
        bottom: 0;
        left: 0;
        margin: 0;
        width: 100%;
        >h4{
            display: none;
        }
        ul{
            width: 100%;
            height: 100px;
            @include flex(row);
            li{
                i{
                    line-height: 44px;
                    height: 44px;
                    display: inline-block;
                    font-size: 32px;
                    color: #656565;
                    margin: 12px auto 6px;
                }
                width: 20%;
                box-sizing: border-box;
                height: 100%;
                text-align: center;
                a{
                    text-decoration: none;
                }
                p{
                    font-size: 22px;
                    color: #656565;
                }
            }
        }
    }
</style>
<style lang="scss">

</style>