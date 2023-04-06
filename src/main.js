import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import LoginPage from "@/pages/LoginPage.vue";
import App from "@/App.vue";

const routes = [
    { path: '/login', component: LoginPage }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
