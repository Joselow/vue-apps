import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
          path: '/',
          redirect: '/etiquetas'
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
        {
            path: '/simon-dice',
            name: 'simon-says',
            component: ()=> import('@/views/SimoSaysView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'not-found',
          component: () => import('@/views/NotFoundView.vue')
        }
    ]
})

export default router