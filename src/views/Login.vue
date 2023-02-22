<template>
  <nav id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">signup</router-link>|
      <router-link to="/findId">findId</router-link>|
      <router-link to="/findPw">findPw</router-link>
      
      </nav>
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
      <div class="container2">
        <article id="main" class="special">
          <header>
            <h2>로그인</h2>
          </header>
          <section>
                <div id="container2">
                  <form>
                  <label for="id">아이디</label>
                  <input type="text" name=memberId v-model="memberId"/><br>
                  <label for="pw">패스워드</label>
                  <input type="text" name="memberPw" v-model="memberPw"/><br>
                  </form>
                  <button @click="handleLogin">로그인</button>
                </div>
          </section>
        </article>
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
  setup(){
    const router = useRouter();

    const state = reactive({
      memberId:'',
      memberPw:'',
    });

    const handleLogin = async() => {
      console.log('로그인 버튼이 클릭됨');

      const url = `/api/member/login`;
      const headers = {"Content-Type":"application/json"};
      const body = {
        memberId : state.memberId,
        memberPw : state.memberPw
      }
      const response = await axios.post(url, body, {headers});
      const data = response['data']  
      if(data.check === 1){
        await router.push({path:'/'});
        // this.$session.set('sessionId', data.memberId);
        // console.log(this.$session.get('sessionId'))
        

      } else if(data.check === -1){
        alert("로그인 실패");
        await router.push({path:'/login'});
      }
    };

    return {
      state,
      ...toRefs(state),
      handleLogin
    }
  }
}
</script>

<style scoped>

</style>