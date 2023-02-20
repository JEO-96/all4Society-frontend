import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import CalendarView from '../views/CalendarView.vue'
import Login from "@/views/Login.vue";
import FindId from "@/views/FindId.vue";
import FindPw from "@/views/FindPw.vue";
import MyInfo from "@/views/MyInfo.vue";
import Signup from "@/views/Signup.vue";

//board
import Register from "@/views/Register.vue";
import RegisterSociety from "@/views/RegisterSociety.vue";
import SocietyBoardSport from "@/views/SocietyBoardSport.vue";
import SocietyBoardMusic from "@/views/SocietyBoardMusic.vue";
import SocietyBoardTrip from "@/views/SocietyBoardTrip.vue";
import SocietyBoardStudy from "@/views/SocietyBoardStudy.vue";


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
    path: '/SocietyBoardSport',
    name: 'SocietyBoardSport',
    component: SocietyBoardSport
  },
  {
    path: '/SocietyBoardMusic',
    name: 'SocietyBoardMusic',
    component: SocietyBoardMusic
  },
  {
    path: '/SocietyBoardTrip',
    name: 'SocietyBoardTrip',
    component: SocietyBoardTrip
  },
  {
    path: '/SocietyBoardStudy',
    name: 'SocietyBoardStudy',
    component: SocietyBoardStudy
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
    path: "/login",
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