import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from "@/App.vue";
import {routes} from '@/routes'
import LoginService from "@/services/login-service";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let isAuth = LoginService.checkAuth();

    if (to.name !== 'login' && !isAuth) {
        next({name: 'login'})
    }
    else {
        next()
    }
})

const app = createApp(App);
app.use(router);
app.mount('#app');
