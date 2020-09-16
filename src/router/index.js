import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/nav/Home.vue'
import Login from '../views/nav/Login.vue'
import Profile from '../views/nav/Profile.vue'
import PostDetail from '../views/post/PostDetail.vue'
import Explore from '../views/nav/Explore.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nav/About.vue')
  },
  {
    path: '/explore/:search?',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
