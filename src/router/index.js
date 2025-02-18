import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/forum/Index.vue'
import ForumCategory from '../views/forum/ForumCategory.vue'
import ForumPage from '../views/forum/ForumPage.vue'
import ThreadPage from '../views/forum/ThreadPage.vue'
import CreateThreadPage from '../views/forum/CreateThreadPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/category',
      name: 'category-page',
      component: ForumCategory,
    },
    {
      path: '/forum',
      name: 'forum-page',
      component: ForumPage,
    },
    {
      path: '/thread',
      name: 'thread-page',
      component: ThreadPage,
    },
    {
      path: '/create-thread',
      name: 'create-thread',
      component: CreateThreadPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
