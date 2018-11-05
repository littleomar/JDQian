<template>
    <section>
        <Panel title="新手特权" :class="$style.panel">
            <section :class="$style.content">
                <div :class="$style.item">
                    <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
                    <p :class="$style.gray">新手专享</p>
                    <img :src="img_src[0]" alt="gift bag">
                </div>
                <div :class="$style.item">
                    <ul>
                        <li>
                            <img :src="img_src[1]" alt="gift bag">
                            <h4 :class="$style.red">领128元新手礼包领128元新手礼包</h4>
                            <p :class="$style.gray">立即开通</p>

                        </li>
                        <li>
                            <img :src="img_src[2]" alt="gift bag">
                            <h4>打白条<span :class="$style.red">享免息</span></h4>
                            <p :class="$style.gray">立即开通享豪礼</p>

                        </li>
                    </ul>
                </div>
            </section>
        </Panel>
    </section>
</template>

<script>
    import Panel from  '../core/panel';
    export default {
        name: "novice",
        components : {
            Panel
        },
        data (){
            return {
                img_src : [
                    require("../../image/gift_bag.png"),
                    require("../../image/money.jpg"),
                    require("../../image/file_jd.jpg")
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
            border-bottom: 1px solid #ddd;
        }
        .content{
            @include list(row);
            .item{
                width: 50%;
                box-sizing: border-box;
                &:first-child{
                    padding: 32px 20px;
                    text-align: center;
                    border-right: 1px solid #ddd;
                    img{
                        width: 132px;
                        height: 132px;
                        margin: 20px 0;

                    }
                }
                h4{
                    font-size: 26px;
                    line-height: 40px;
                }
                .red{
                    color: #f00;
                }
                p{
                    color: #999;
                    font-size: 24px;
                    margin-top: 6px;
                }
                ul{
                    width: 100%;
                    li{
                        padding: 32px 28px ;
                        height: 144px;
                        width: 100%;
                        box-sizing: border-box;
                        &:first-child{
                            border-bottom: 1px solid #ddd;
                        }
                        h4{
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            text-align: left;
                        }
                        img{
                            width: 80px;
                            height: 80px;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>