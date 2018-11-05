<template>
    <div>
        <Heador></Heador>
        <Mslider></Mslider>
        <Ad></Ad>
        <Feeter></Feeter>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import Heador from "../public/header";
    import Feeter from "../public/footer";
    import Navbar from "../public/navbar";
    import Mslider from "./mslider";
    import Ad from "./ad";

    export default {
        name: "index",
        components : {
            Heador,
            Feeter,
            Navbar,
            Mslider,
            Ad
        }
    }
</script>

<style lang="scss">
    body{
        background-color: #f5f5f5;
    }
</style>