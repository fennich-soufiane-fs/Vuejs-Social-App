import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import Register from './views/auth/Register.vue'
import Login from './views/auth/Login.vue'
import Home from './views/dashboard/Home.vue'
import { useAuthStore } from './stores/AuthStore'
import Timeline from './views/dashboard/Timeline.vue'
import Settings from './views/dashboard/Settings.vue'


const requireAuth = (to, from, next) => {
  const store = useAuthStore();
  if (store.isLoggedIn) {
    next();
  } else {
    next('/login');
  }
};

const redirectIfAuthenticated = (to, from, next) => {
  const store = useAuthStore();
  if (store.isLoggedIn) {
    next('/timeline');
  } else {
    next();
  }
};


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: redirectIfAuthenticated,
    },
    {
      path: '/',
      name: 'timeline',
      component: Home,
      children: [
        {
          path: '/timeline',
          name: 'dashboard.timeline',
          component: Timeline
        },
        {
          path: '/settings',
          name: 'dashboard.settings',
          component: Settings
        }
      ],
      beforeEnter: requireAuth,
    },
  ],
})

export default router
