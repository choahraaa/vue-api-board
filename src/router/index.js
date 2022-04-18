import { createRouter, createWebHistory } from 'vue-router'
import BoardInsert from "@/components/BoardInsert";
import BoardMain from "@/components/BoardMain";

const routes = [
    {
        path: '/',
        name: 'BoardMain',
        component: BoardMain
    },
    {
        path: '/insert',
        name: 'BoardInsert',
        component: BoardInsert
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;