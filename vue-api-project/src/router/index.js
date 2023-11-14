import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import YoutubeView from '@/views/YoutubeView.vue'
import VideoView from '@/views/VideoView.vue'

import VideoList from '@/components/video/VideoList.vue'
import VideoCreate from '@/components/video/VideoCreate.vue'
import VideoDetail from '@/components/video/VideoDetail.vue'
import VideoUpdate from '@/components/video/VideoUpdate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: YoutubeView
    },
    {
      path: '/video',
      name: 'video',
      component: VideoView,
      children: [
        {
          path: "",
          name: "videoList",
          component: VideoList
        },
        {
          path: "create",
          name: "videoCreate",
          component: VideoCreate
        },
        {
          path: ":id",
          name: "videoDetail",
          component: VideoDetail
        },
        {
          path: "update",
          name: "videoUpdate",
          component: VideoUpdate
        },
      ]
    },
  ]
})

export default router
