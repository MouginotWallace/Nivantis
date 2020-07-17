
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Index.vue') },
      {
        path: '/Calculatrice',
        component: () => import('pages/Calculatrice.vue')
      },
      {
        path: '/Formulaire',
        component: () => import('pages/Formulaire.vue')
      },
      {
        path: '/teste',
        component: () => import('pages/Teste.vue')
      },
      {
        path: '/Map',
        component: () => import('pages/Map.vue')
      },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
