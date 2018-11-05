<template>
    <div>
        <Heador></Heador>
        <hslider></hslider>
        <Novice></Novice>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Life></Life>
        <Feeter></Feeter>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import Heador from "../public/header";
    import hslider from "./hslider";
    import Novice from "./novice";
    import Borrow from "./borrow";
    import Money from "./money";
    import Product from "./product";
    import Life from "./life";
    import Feeter from "../public/footer";
    import Navbar from "../public/navbar";

    export default {
        name: "index",
        components : {
            Borrow,
            Heador,
            hslider,
            Novice,
            Money,
            Product,
            Life,
            Feeter,
            Navbar
        }
    }
</script>

<style lang="scss">
    body{
        background-color: #f5f5f5;
    }
</style>