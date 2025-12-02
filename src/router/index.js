import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'

const routes = [
  { 
    path: '/', 
    name: 'All',
    component: StudentListView 
  },
  { 
    path: '/under21', 
    name: 'Under21',
    component: StudentListView 
  },
  { 
    path: '/over21', 
    name: 'Over21',
    component: StudentListView 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
