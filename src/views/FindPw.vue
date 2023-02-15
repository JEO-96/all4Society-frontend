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
            <form>
              <div class="container2">
                <label for="id">아이디</label>
                <input type="text" id="uid" name="uid" value="" placeholder="아이디" required><br>
                <label for="phone">아이디</label>
                <input type="text" id="phone" placeholder="전화번호" required><br>
                <input type="button" value="인증번호 전송" placeholder="전화번호" required><br>
                <br>
                <input type="text" id="checkPhone" name="checkPhone" value="" placeholder="인증번호" required><br>
                <input type="submit" value="신청"/>
                <input type="button" value="뒤로가기">
              </div>
            </form>
          </section>

        </article>
      </div>

    </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "FindPw"
}
</script>

<style scoped>

</style>