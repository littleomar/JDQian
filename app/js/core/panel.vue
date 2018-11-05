<template lang="html">
    <section :class="[panelClass,cname]">
        <h4>-{{ title }}-</h4>
        <slot/>
    </section>
</template>

<script>
    export default {
        name: "panel",
        props : {
            cname : {
                type : String,
                default : ""
            },
            title : {
                type: String,
                default: ""
            }
        },
        data : function () {
            return {
                panelClass : "panel"
            }
        }
    }
</script>

<style lang="scss">

</style>