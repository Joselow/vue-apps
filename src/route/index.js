import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: ()=> import('@/views/HomeView.vue')
        },
        {
            path: '/tags',
            component: ()=> import('@/views/InputTagView.vue')
        },
        {
            path: '/kanban-board',
            component: ()=> import('@/views/KanbanBoardView.vue')
        },
        {
            path: '/split-account',
            component: ()=> import('@/views/SplitAccountView.vue')
        },
        // {
        //     path: '/',
        //     component: () => import('@/App.vue')
        // }
    ]
})

export default router