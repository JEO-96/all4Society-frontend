<template>
  <div id="root">
    <div v-if="isLogin">  <!-- 로그인 했을때 -->
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/registerSociety">동호회 게시판 생성</router-link> |
        <router-link to="/calendarview">Calendar</router-link> |
        <router-link to="/login">login</router-link>|
        <router-link to="/signup">signup</router-link>|
        <router-link to="/findId">findId</router-link>|
        <router-link to="/findPw">findPw</router-link>|
        <router-link to="/myInfo">myInfo</router-link>
      </nav>
    </div>
    <div v-else> <!-- 로그인 안했을때 -->
      <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">동호회 게시판 생성</router-link> |
      <router-link to="/calendarview">Calendar</router-link> |
      <router-link to="/login">login</router-link>|
      <router-link to="/signup">signup</router-link>|
      <router-link to="/auth/login">findId</router-link>|
      <router-link to="/auth/login">findPw</router-link>|
      <router-link to="/auth/login">myInfo</router-link>
      </nav>
    </div>

  </div>
  <h1>{{isLogin}}</h1>>
  <router-view/>
</template>

<script>
import Login from "@/views/Login.vue";

export default {
  name: "App",
  components: {
    Login,
  },
  data() {
    return {
      isLogin: false
    }
  },
  methods:{
    login(){
      Object.assign(this.isLogin, true);
      console.log("자식이 함수 호출함", this.isLogin);
    },
    loginCheck() {
      Object.assign(this.isLogin, true);
    },
  }
}




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

