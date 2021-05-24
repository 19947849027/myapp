export default [
  { 
    path: '/', 
    component: '@/pages/layouts/main',
    routes:[
      {
        path:'/users',
        component: '@/pages/users',
      },
      {
        path:'/home',
        component: '@/pages/main/home',
      },
      {
        path:'/example',
        component: '@/pages/main/example',
      },

    ]
  },
]
