<template>
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
              <div class="container2">
                <label>휴대폰번호</label>
                <input type="text" name="phone" placeholder="휴대폰번호" v-model="phone"><br>
                <br>
                <button @click="handleFindId">확인</button>
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
  name: "FindId",
  data: function () {
    return {
      phone: '',
    }
  },
  setup () {
    const router = useRouter();

    const state = reactive({
      phone:'',
    });

    const handleFindId = async() => {
      console.log('아이디 찾기버튼 클릭');
      const url = `api/member/findId`;
      const headers = {"Content-Type":"application/json"};
      const body = {
        memberPhone: state.phone,
      }
      console.log("body: " , body);

      await axios.post(url, body, {headers})
          .then(function (response) {
            console.log("response", response.data.memberId);
            alert("아이디는 " + response.data.memberId + "입니다");
          })
          .catch(function (error){
            console.log('error : ', error);
          });
    }
    return {
      state, ...toRefs(state), handleFindId
    };
  }
}
</script>

<style scoped>

</style>