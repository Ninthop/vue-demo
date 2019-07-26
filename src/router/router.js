import Home from '../views/Home.vue'

export default[
    {
      path: '/',
      name: 'home',
      component: Home,
      params: {
        
      }
    },{
      path: '/city',
      name: 'city',
      component: () => import('../views/City.vue')
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: () => import('../views/Detail.vue')
    }
]