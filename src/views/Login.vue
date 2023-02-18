<template>

<html>
  <head>
    <title>로그인</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
  </head>
  <body class="no-sidebar is-preload">


    <!-- Header -->
    <div id="header">
      <!-- Inner -->
      <div class="inner">
        <header>
          <h1><a href="index.html" id="logo">All4SOCIETY</a></h1>
        </header>
      </div>
    </div>
    <!-- Main -->
    <div class="wrapper style1">
      <div class="container">
        <article id="main" class="special">
          <header>
            <h2>로그인</h2>
          </header>
          <section>
            <form @submit.prevent="login()">
                <div id="container2">
                  <label for="id">아이디</label>
                  <input type="text" id="id" v-model="id"><br>
                  <label for="pw">패스워드</label>
                  <input type="password" id="pw" v-model="pw"><br>
                  <input type="submit" value="로그인"/>
                  <input type="button" value="뒤로가기"/>
                </div>
            </form>
          </section>
        </article>
      </div>
    </div>
  </body>
</html>
  <button @click="a">값 true로 바꾸기</button>
</template>

<script>
import axios from "axios";
import {assertBoolean} from "@babel/core/lib/config/validation/option-assertions";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  props: {

  },
  data() {
    return {
      id: '',
      pw: '',
    }
  },
  methods: {
    a() {
      this.$parent.login();
      console.log("버튼 클릭됨");
    },
    async login() {
      try {
        const result = await axios.get('/auth/login', {
          auth: {
            id: this.id,
            pw: this.pw
          }
        });
        if (result.status === 200){
          // 로그인 성공할 경우
          this.$emit('loginCheck', true);
        }
      } catch (err) {
        // 로그인 실패할 경우
        this.$emit('loginCheck', false);
      }
    }
  }
}
</script>


<style scoped>

</style>