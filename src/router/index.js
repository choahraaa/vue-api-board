import { createRouter, createWebHistory } from 'vue-router'
import BoardInsert from "@/components/BoardInsert";
import BoardMain from "@/components/BoardMain";
import BoardEdit from "@/components/BoardEdit";

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
    {
        path:'/edit/:id',
        name: 'BoardEdit',
        component: BoardEdit
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;