import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64cb5466 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0c9e6d1b = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _f13102a6 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _24a957ed = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _01c1b65f = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _58fc7aa9 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _0b739b3a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _64cb5466,
    children: [{
      path: "/",
      component: _0c9e6d1b,
      name: "home"
    }, {
      path: "/login",
      component: _f13102a6,
      name: "login"
    }, {
      path: "/register",
      component: _f13102a6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _24a957ed,
      name: "profile"
    }, {
      path: "/settings",
      component: _01c1b65f,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _58fc7aa9,
      name: "editor"
    }, {
      path: "/article/:slug?",
      component: _0b739b3a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
