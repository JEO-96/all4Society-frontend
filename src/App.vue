<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/registerSociety">동호회 게시판 생성</router-link> |
    <router-link to="/calendarview">Calendar</router-link> |
    <router-link to="/tutorials">tutorials</router-link> |
    <router-link to="/tutorial-details">tutorial-details</router-link> |
    <router-link to="/add">add</router-link>|
    <router-link to="/auth/login">login</router-link>|
    <router-link to="/signup">signup</router-link>|
    <router-link to="/findId">findId</router-link>|
    <router-link to="/findPw">findPw</router-link>|
    <router-link to="/myInfo">myInfo</router-link>
  </nav>
  <router-view/>
</template>

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

