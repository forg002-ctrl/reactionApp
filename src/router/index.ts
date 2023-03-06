import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: (): unknown => import('@/pages/MainPage.vue'),
    },
    {
        path: '/:catchAll(.*)',
        component: (): unknown => import('@/pages/Error404.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
