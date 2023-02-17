<template>
  <!DOCTYPE HTML>
  <!--
    Massively by Pixelarity
    pixelarity.com | hello@pixelarity.com
    License: pixelarity.com/license
  -->
  <html>
  <head>
    <title>회원가입</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    <link rel="stylesheet" href="assets/css/main.css"/>
    <noscript>
      <link rel="stylesheet" href="assets/css/noscript.css"/>
    </noscript>
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
          <h2><a href="#">회원가입</a></h2>
        </header>
        <section>
          <form @submit.prevent="submitForm">
            <div class="container2">
              <label for="id">아이디</label>
              <input type="text" id="id" v-model="id"><br>
              <label for="password">비밀번호</label>
              <input type="password" id="password" v-model="pw"><br>
              <label for="passwordConfirm">비밀번호확인</label>
              <input type="password" id="passwordConfirm" v-model="pwConfirm"><br>
              <label for="phone">휴대폰 번호</label>
              <input type="text" id="phone" v-model="phone"><br>
              <label for="생년월일">생년월일</label>
              <input type="text" id="birth" v-model="birth"><br>
              <label for="introduce">자기소개</label>
              <textarea id="introduce" v-model="introduce"></textarea><br>
              <input type="submit" value="회원가입"/>
              <input type="button" value="뒤로가기"/>
            </div>
          </form>
        </section>
      </article>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Signup',
  data() {
    return {
      id: '',
      pw: '',
      pwConfirm: '',
      phone: '',
      birth: '',
      introduce: ''
    }
  }
};
</script>

<style scoped>

</style>