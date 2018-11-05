<template lang="html">
    <div :class="[btnClass,cname]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "panel",
        props :{
            cname : {
                type:String,
                default:""
            }
        },
        data(){
            return {
                btnClass:"btn"
            }
        },
    }
</script>

<style lang="scss">
    @import "../../css/element";
    .btn{
        @include btn;
    }
</style>