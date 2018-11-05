import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index"
import '../../css/reset.scss'
import Money from "../money/index"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
    ],
})

