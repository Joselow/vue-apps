import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            name:'home',
            alias: '/home',
            component: ()=> import('@/views/HomeView.vue')
        },
        {
            path: '/etiquetas',
            name: 'tags',
            component: ()=> import('@/views/InputTagView.vue')
        },
        {
            path: '/pizarra-kanbam',
            name: 'kanban-board',
            component: ()=> import('@/views/KanbanBoardView.vue')
        },
        {
            path: '/dividir-cuentas',
            name: 'split-account',
            component: ()=> import('@/views/SplitAccountView.vue')
        },
       
        // {
        //     path: '/',
        //     component: () => import('@/App.vue')
        // }
    ]
})

export default router