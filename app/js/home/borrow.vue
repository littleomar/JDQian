<template>
    <Panel title="极速借贷" :class="$style.panel">
        <section :class="$style.content">
            <router-link :to="{name:'home'}">
                <img :src="img_src[0]" alt="奖券">
            </router-link>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel';
    export default {
        name: "borrow",
        components : {
            Panel
        },
        data(){
            return {
                img_src: [
                    require('../../image/ticket_jd.jpg')
                ]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element";
    .panel{
        @include panel;
        .content{
            padding-bottom: 40px;
            img{
                width: 100%;
            }
        }
    }
</style>