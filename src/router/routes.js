import Home from '../views/Home.vue'

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const NotFound = () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // 在没有匹配到路由的时候返回 404 页面
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
