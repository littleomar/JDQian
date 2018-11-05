<template>
    <Panel title="公司信息" :class="$style.panel">
        <ul :class="$style.content">
            <li><img :src="img_src[0]" alt=""></li>
            <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from '../core/panel';
    export default {
        name: "feeter",
        components : {
            Panel
        },
        data(){
            return {
                img_src : [
                    require("../../image/577cf395N31e76288.png")
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .panel{
        @include panel;
        margin-bottom: 100px;
        >h4{
            display: none;
        }
        .content{
            background-color: #f5f5f5;
            @include flex;
            li{
                width: 100%;
                box-sizing: border-box;
                >img{
                    width: 100%;
                }
                &:nth-of-type(2){
                    color: #999;
                    text-align: center;
                    padding: 24px 32px;
                    height: 96px;
                    font-size: 24px;
                    line-height: 38px;
                }
                &:nth-of-type(n+3){
                    color: #999;
                    text-align: center;
                    padding: 24px 32px;
                    height: 96px;
                    font-size: 24px;
                    line-height: 38px;
                    border-top: 1px solid #ddd;
                }
            }
        }
    }
</style>