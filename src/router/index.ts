import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("@/views/courses/CourseList.vue"),
    },
    {
      path: "/courses/:id",
      name: "course",
      props: true,
      component: () => import("@/views/courses/CourseView.vue"),
    },
    {
      path: "/courses/:course_id/unit/:unit_id",
      name: "course_unit",
      props: true,
      component: () => import("@/views/courses/UnitView.vue"),
    },
    {
      path: "/courses/:course_id/unit/:unit_id/lessons/:lesson_id",
      name: "course_lesson",
      props: true,
      component: () => import("@/views/courses/LessonView.vue"),
    },
    {
      path: "/creators",
      name: "creators",
      component: () => import("@/views/creators/CreatorList.vue"),
    },
    {
      path: "/creators/:id",
      name: "creator",
      props: true,
      component: () => import("@/views/creators/CreatorList.vue"),
    },
    /*
    {
      path: '/course',
      name: 'course.list',
      component: () => import('../views/course/ListView.vue')
    },
    {
      path: '/course/:id',
      name: 'course.show',
      component: () => import('../views/course/CourseView.vue')
    },
    {
      path: '/creator',
      name: 'creator',
      component: () => import('../views/creator/ListView.vue')
    },
    */
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/vlogin',
      name: 'vlogin',
      component: () => import('../views/VLogin.vue')
    }
  ]
})

export default router
