import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import DistributorDetails from '../views/DistributorDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/distributordetails/:index',
      name: 'distributordetails',
      component: DistributorDetails,
      props: true
    }
  ]
})

export default router
