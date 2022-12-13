import { createRouter, createWebHistory } from 'vue-router'
import AdminNeighborhoods from '../views/AdminNeighborhoods'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    children: [
      {
        path: 'neighborhoods',
        component: AdminNeighborhoods
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
