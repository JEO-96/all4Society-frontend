<template>
      <nav id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>|
      <router-link to="/signup">signup</router-link>|
      <router-link to="/findPw">findPw</router-link>
      
    </nav>
  <!DOCTYPE HTML>
  <!--
    Massively by Pixelarity
    pixelarity.com | hello@pixelarity.com
    License: pixelarity.com/license
  -->
  <html>
  <head>
    <title>아이디 찾기</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
  </head>
  <body class="is-preload">

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
          <h2><a href="#">아이디 찾기</a></h2>
        </header>
          <section>
            <form>
              <div class="container2">
                <label>휴대폰번호</label>
                <input type="text" name="phone" placeholder="휴대폰번호" v-model="memberPhone"><br>
                <br>
              </div>
              </form>
                <button @click="handleFindId">확인</button>

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
  setup () {
    const router = useRouter();
    const state = reactive({
      memberPhone:'',
    });

    const handleFindId = async() => {
      console.log('아이디 찾기버튼 클릭');
      const url = `api/member/findId`;
      const headers = {"Content-Type":"application/json"};
      const body = {
        memberPhone: state.memberPhone,
      }
      console.log("body: " , body);

      const response = await axios.post(url, body, {headers})
      const data = response['data']
      console.log(data)
      if(data.check === 1){
              console.log(data)
      console.log(data.check)
      console.log(data.result)
      alert("아이디는 " + data.result + "입니다");
      await router.push({path:'/login'});

      } else if(data.check === -1){
        alert("번호와 일치하는 아이디가 없습니다.")
        console.log(data)
      console.log(data.check)
      console.log(data.result)
      }
          // .then(function (response) {
          //   console.log("response", response.data.memberId);
          //   alert("아이디는 " + response.data.memberId + "입니다");
          // })
          // .catch(function (error){
          //   console.log('error : ', error);
          // });
    }
    return {
      state, ...toRefs(state), handleFindId
    };
  }
}
</script>

<style scoped>

</style>