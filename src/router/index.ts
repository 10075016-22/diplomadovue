import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        // rutas de modulos
        {
            path: '/solicitudes',
            name: 'solicitudes',
            component: () => import('@/views/solicitudes/Solicitud.vue')
        },
        {
            path: '/actas',
            name: 'actas',
            component: () => import('@/views/actas/Actas.vue')
        },
        {
            path: '/sesiones',
            name: 'sesiones',
            component: () => import('@/views/sesiones/Sesion.vue')
        },
        {
            path: '/invitados',
            name: 'invitados',
            component: () => import('@/views/invitados/Invitados.vue')
        }
    ]
})

export default router