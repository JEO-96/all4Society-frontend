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
                <label>이름</label>
                <input type="text" name="name" placeholder="이름" v-model="name"><br>
                <label>휴대폰번호</label>
                <input type="text" name="phone" placeholder="휴대폰번호" v-model="phone"><br>
                <br>
                <button @click="findId">확인</button>
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
  data() {
    return {

    }
  },
  methods: {
    findId() {
      axios.get(`/api/member/findId`)
          .then(response => {
          const data = response['data']
          console.log(data)}).catch(e => console.error(e));
    }
  }
}
</script>

<style scoped>

</style>