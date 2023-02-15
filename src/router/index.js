import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import CalendarView from '../views/CalendarView.vue'
import Login from "@/views/Login.vue";
import FindId from "@/views/FindId.vue";
import FindPw from "@/views/FindPw.vue";
import MyInfo from "@/views/MyInfo.vue";
import Signup from "@/views/Signup.vue";
import Register from "@/views/Register.vue";
import HomeView from '../views/HomeView.vue';



const routes = [
  {
    path: '/studentlist',
    name: 'studentlist',
    component: Register
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
    path: '/',
    name: 'home',
    component: HomeView
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
  },
  {
    path: "/FindId",
    name: "findId",
    component: FindId
  },
  {
    path: "/FindPw",
    name: "findPw",
    component: FindPw
  },
  {
    path: "/Login",
    name: "login",
    component: Login
  },
  {
    path: "/MyInfo",
    name: "myInfo",
    component: MyInfo
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

