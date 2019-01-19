import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import About from '~/pages/about'
import Blog from '~/pages/blog'
import Catalog from '~/pages/catalog'
import Todo from '~/pages/todo'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'home',
        path: '/',
        component: Index
      },
      {
        name: 'about',
        path: '/about',
        component: About
      },
      {
        name: 'blog',
        path: '/blog',
        component: Blog
      },
      {
        name: 'catalog',
        path: '/catalog',
        component: Catalog
      },
      {
        name: 'todo',
        path: '/todo',
        component: Todo
      }
    ]
  })
}
