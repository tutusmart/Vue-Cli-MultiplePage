import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import TestRouter from '../components/test-child'
import papapa from '../components/papapa'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/TestRouter',
          name: 'testRouter',
          component: TestRouter
        }
      ]
    },
    {
      path: '/papapa',
      name: 'papapa',
      component: papapa,
    },
  ]
})
