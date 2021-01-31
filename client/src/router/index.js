import Vue from 'vue'
import VueRouter from 'vue-router'
import Ping from '../components/Ping.vue'
import About from '../components/About.vue'
import Products from '../components/Products'


Vue.use(VueRouter)

const routes = [
  {
    path:'/ping',
    name:'Ping',
    component: Ping
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/products',
    name:'Products',
    component:Products
  }
]

const router = new VueRouter({
  routes
})

export default router
