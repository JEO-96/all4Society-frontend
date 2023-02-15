import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'
import StudentView from '../views/StudentView.vue'
import CalendarView from '../views/CalendarView.vue'


const routes = [
  {
    path: '/studentlist',
    name: 'studentlist',
    component: StudentListView
  },
  {
    path: '/student',
    name: 'student',
    component: StudentView
  }, 
  {
    path: '/calendarview',
    name: 'calendarview',
    component: CalendarView
  },
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../components/TutorialsList")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("../components/Tutorial")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddTutorial")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

