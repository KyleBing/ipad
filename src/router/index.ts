import { createRouter, createWebHashHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const routes = [
  {
    path: '/list',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'iPad 所有机型参数大全' },
  },
  {
    path: '/',
    redirect: '/list',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
