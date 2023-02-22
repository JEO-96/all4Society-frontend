<template>
      <nav id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>|
      <router-link to="/signup">signup</router-link>|
      <router-link to="/findId">findId</router-link>|
      
    </nav>
  <!DOCTYPE HTML>
  <!--
    Massively by Pixelarity
    pixelarity.com | hello@pixelarity.com
    License: pixelarity.com/license
  -->
  <html>
  <head>
    <title>비밀번호 찾기</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
  </head>
  <body class="no-sidebar is-preload">
  <div id="page-wrapper">

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
            <h2><a href="#">비밀번호 찾기</a></h2>
          </header>
          <section>
              <div class="container2">
                <form>
                <label for="id">아이디</label>
                <input type="text" memberId="id" name="id" v-model="memberId" placeholder="아이디"><br>
                <label>휴대폰번호</label>
                <input type="text" name="phone" placeholder="휴대폰번호" v-model="memberPhone"><br>
                </form>
                <button @click="handleGetPw">"찾기"</button>
              </div>
          </section>
        </article>
      </div>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
import {reactive, toRefs} from "@vue/reactivity";
import axios from "axios";
import {useRouter} from "vue-router";
export default {
  name: "FindPw",
  hint: '',
  methods: {

  },
  setup () {
    const router = useRouter();
    const state = reactive({
      memberId:'',
      memberPhone:''
    });
    const handleGetPw = async () => {
      console.log('비밀번호 찾기');
      const url = `api/member/findPw`;
      const headers = {"Content-Type":"application/json"};
      const body = {
        memberId: state.memberId,
        memberPhone: state.memberPhone,
      }
      console.log("body", body);
      const response = await axios.post(url, body, {headers})
      const data = response['data']
      console.log(data)
      if(data.check === 1){
              console.log(data)
      console.log(data.check)
      console.log(data.result)
      alert("비밀번호는 " + data.result + "입니다");
      await router.push({path:'/login'});
      }else if(data.check === -1){
        alert("번호와 아이디가 일치하는 비밀번호가 없습니다.")
        console.log(data)
      console.log(data.check)
      console.log(data.result)
      }

    }
    return {
      state, ...toRefs(state), handleGetPw
    };
  }
}
</script>

<style scoped>

</style>