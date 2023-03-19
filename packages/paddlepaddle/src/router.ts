import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  { path: '/', redirect: '/zh/overview' },
  // zh
  {
    path: '/zh',
    redirect: '/zh/overview',
  },
  {
    path: '/zh/overview',
    name: 'zh_overview',
    component: () => {
      return import('@/views/overview/Index.vue');
    },
    beforeEnter: () => {
      localStorage.setItem('lang', 'zh');
    },
    meta: { transition: 'slide-down' },
  },
  // {
  //   path: '/zh/detail',
  //   name: 'zh_detail',
  //   component: () => {
  //     return import('@/views/contributors/Index.vue');
  //   },
  //   beforeEnter: () => {
  //     localStorage.setItem('lang', 'zh');
  //   },
  //   meta: { transition: 'slide-up' },
  // },
  {
    path: '/zh/mobile',
    name: 'zh_mobile',
    component: () => {
      return import('@/views/mobile/Index.vue');
    },
    beforeEnter: () => {
      localStorage.setItem('lang', 'zh');
    },
  },
  // {
  //   path: '/zh/about',
  //   name: 'zh_about',
  //   component: () => {
  //     return import('@/views/about/Index.vue');
  //   },
  //   beforeEnter: () => {
  //     localStorage.setItem('lang', 'zh');
  //   },
  // },
  // en
  {
    path: '/en',
    redirect: '/en/overview',
  },
  {
    path: '/en/overview',
    name: 'en_overview',
    component: () => {
      return import('@/views/overview/Index.vue');
    },
    beforeEnter: () => {
      localStorage.setItem('lang', 'en');
    },
    meta: { transition: 'slide-down' },
  },
  // {
  //   path: '/en/detail',
  //   name: 'en_detail',
  //   component: () => {
  //     return import('@/views/contributors/Index.vue');
  //   },
  //   beforeEnter: () => {
  //     localStorage.setItem('lang', 'en');
  //   },
  //   meta: { transition: 'slide-up' },
  // },
  {
    path: '/en/mobile',
    name: 'en_mobile',
    component: () => {
      return import('@/views/mobile/Index.vue');
    },
    beforeEnter: () => {
      localStorage.setItem('lang', 'en');
    },
  },
  // {
  //   path: '/en/about',
  //   name: 'en_about',
  //   component: () => {
  //     return import('@/views/about/Index.vue');
  //   },
  //   beforeEnter: () => {
  //     localStorage.setItem('lang', 'en');
  //   },
  // },
  // {
  //   path: '/overview',
  //   name: 'overview',
  //   component: () => {
  //     return import('@/views/overview/Index.vue');
  //   },
  // },
  // {
  //   path: '/detail',
  //   name: 'detail',
  //   component: () => {
  //     return import('@/views/contributors/Index.vue');
  //   },
  // },
  // {
  //   path: '/mobile',
  //   name: 'mobile',
  //   component: () => {
  //     return import('@/views/mobile/Index.vue');
  //   },
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => {
  //     return import('@/views/about/Index.vue');
  //   },
  // },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
