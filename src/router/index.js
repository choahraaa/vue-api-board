import { createRouter, createWebHistory } from 'vue-router'
import BoardInsert from "@/components/BoardInsert";
import BoardMain from "@/components/BoardMain";
import BoardEdit from "@/components/BoardEdit";
import LoginPage from "@/components/LoginPage";

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path:'/main',
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