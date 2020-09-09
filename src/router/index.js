import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/nav/Home.vue'
import Login from '../views/nav/Login.vue'
import Profile from '../views/nav/Profile.vue'
import PostDetail from '../views/post/PostDetail.vue'
import Explore from '../views/nav/Explore.vue'
import Search from '../views/Search/Search.vue'
import UserSearch from '../views/Search/UserSearch.vue'
import PostSearch from '../views/Search/PostSearch.vue'
import CommentSearch from '../views/Search/CommentSearch.vue'
// import { component } from 'vue/types/umd'

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
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/profile/:username',
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
  {
    path: '/search',
    name: 'Search',
    component: Search,
    children: [
      {
        path: 'users',
        name: UserSearch,
        component: UserSearch
      },
      {
        path: 'posts',
        name: 'PostSearch',
        component: PostSearch
      },
      {
        path: 'comments',
        name: 'CommentSearch',
        component: CommentSearch
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
