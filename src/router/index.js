import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearningView from '../views/LearningView.vue'
import TestingView from '../views/TestingView.vue'
import CollectionsView from '../views/CollectionsView.vue'
import ReportsView from '../views/ReportsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/learning',
      name: 'learn',
      component: LearningView
    },
    {
      path: '/testing',
      name: 'test',
      component: TestingView
    },
    {
      path: '/collections',
      name: 'collections',
      component: CollectionsView
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView
    }
  ]
})

export default router
