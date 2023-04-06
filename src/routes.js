import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";

export const routes = [
    {
        path: '/login',
        component: LoginPage,
        name: 'login'
    },
    {
        path: '/',
        component: HomePage,
        name: 'home'
    }
]