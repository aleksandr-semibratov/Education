import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PageHome from "@/components/PageHome";
import PageAbout from "@/components/PageAbout";
import PageNews from "@/components/PageNews";
import PageNotFound from "@/components/PageNotFound";

const routes = [
    { path: '/', component: PageHome },
    { path: '/news', component: PageNews },
    { path: '/about', component: PageAbout },
    { path: '/404', component: PageNotFound },
    { path: '/:catchAll(.*)', redirect: '/404' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

