import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import CalendarView from '../views/CalendarView.vue'
import Login from "@/views/Login.vue";
import FindId from "@/views/FindId.vue";
import FindPw from "@/views/FindPw.vue";
import MyInfo from "@/views/MyInfo.vue";
import Signup from "@/views/Signup.vue";
import Register from "@/views/Register.vue";
import RegisterSociety from "@/views/RegisterSociety.vue";
import SocietyBoard from "@/views/SocietyBoard.vue";


import HomeView from '../views/HomeView.vue';




const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/registerSociety',
    name: 'registerSociety',
    component: RegisterSociety
  },
  {
    path: '/societyBoard',
    name: 'societyBoard',
    component: SocietyBoard
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
    path: "/findId",
    name: "findId",
    component: FindId
  },
  {
    path: "/findPw",
    name: "findPw",
    component: FindPw
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login
  },
  {
    path: "/myInfo",
    name: "myInfo",
    component: MyInfo
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

