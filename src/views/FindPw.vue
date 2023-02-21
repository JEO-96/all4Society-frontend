<template>
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
                <input type="text" memberId="id" name="id" v-model="id" placeholder="아이디"><br>
                </form>
                <button @click="handleGetHint">힌트보기</button>
                <form>
                <label for="answer">답변</label>
                <input type="text" id="answer" name="answer" v-model="answer" placeholder="답변"><br>
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

export default {
  name: "FindPw",
  hint: '',
  methods: {

  },
  data: function () {
    return {
      id: '',
      hint: '',
      answer: '',
    }
  },
  setup () {
    const state = reactive({
      id:'',
      hint:'',
      answer:'',
    });
    const handleGetPw = async () => {
      console.log('비밀번호 찾기');
      const url = `api/member/findPw`;
      const headers = {"Content-Type":"application/json"};
      const body = {
        memberId: state.id,
        memberAnswer: state.answer,
      }
      console.log("body", body);

      await axios.post(url, body, {headers})
          .then(function (response){
            console.log("response: ", response.data.memberPw);
            alert("비밀번호는 : " + response.data.memberPw + "입니다");
          })
          .catch(function (error){
            console.log('error :', error);
          });
    }
    const handleGetHint = async () => {
      console.log('힌트 가져오기');
      const url = `api/member/getHint`;
      const headers = {"Content-Type":"application/json"};
      const body = {
        memberId: state.id,
      }
      console.log("body: ", body);

      await axios.post(url, body, {headers})
          .then(function (response){
            console.log("response: ", response.data.memberHint);
            alert("다음 질문에 답변을 입력하시오: " +response.data.memberHint);
          })
          .catch(function (error){
            console.log('error :', error);
          });
    }


    return{
      state, ...toRefs(state), handleGetHint, handleGetPw
    };
  }
}
</script>

<style scoped>

</style>