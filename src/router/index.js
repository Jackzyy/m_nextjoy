import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/views/Layout'),
      children:[
        {
          path: '/gamecenter',
          name: '游戏中心',
          meta:{
            index:0
          },
          component: ()=>import('@/views/GameCenter/GameCenter'),
        },
        {
          path: '/gamecircle',
          name: '游戏圈',
          meta:{
            index:1
          },
          component: ()=>import('@/views/GameCircle/GameCircle'),
        },
        {
          path: '/gamelive',
          name: '游戏直播',
          meta:{
            index:2
          },
          component: ()=>import('@/views/GameLive/GameLive'),
        },
        {
          path: '/usercenter',
          name: '个人中心',
          meta:{
            index:3
          },
          component: ()=>import('@/views/UserCenter/UserCenter'),
        }
      ]
    }
  ]
})
