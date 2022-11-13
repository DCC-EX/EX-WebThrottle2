import * as VueRouter from 'vue-router';
const routes = [
  {path: '/', redirect: '/throttle'},
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
  },
  {
    path: '/throttle',
    name: 'throttle',
    component: () => import('../views/Throttle.vue'),
  },
  {
    path: '/locos',
    name: 'locos',
    component: () => import('../views/Locos.vue'),
  },
  {
    path: '/functions',
    name: 'functions',
    component: () => import('../views/Functions.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
