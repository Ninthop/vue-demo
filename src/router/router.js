import Home from '../views/Home.vue'

export default[
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/city',
      name: 'city',
      component: () => import('../views/City.vue')
    }
]