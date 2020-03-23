import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/Person_Creator.vue'
import Filter from '../views/Random_Filter.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/People',
    name: 'People',
    component: People
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter
  }
]

const router = new VueRouter({
  routes
})

export default router