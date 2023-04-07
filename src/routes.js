import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";
import EventPage from "@/pages/EventPage.vue";
import QRCodes from "@/pages/QRCodes.vue";

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
    },
    {
        path: '/event/:id',
        component: EventPage,
        name: 'event',
        props: true
    },
    {
        path: '/generate-qr',
        component: QRCodes,
        name: 'generateqr'
    }
]