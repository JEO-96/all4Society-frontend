<template xmlns="http://www.w3.org/1999/html">
  <!DOCTYPE HTML>
  <!--
    Massively by Pixelarity
    pixelarity.com | hello@pixelarity.com
    License: pixelarity.com/license
  -->
  <html>
  <head>
    <title>내정보</title>
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
    <!-- Main -->
    <div class="wrapper style1">
      <div class="container">
        <article id="main" class="special">
          <header>
            <h2><a href="#">내정보</a></h2>
          </header>
          <section>
            <form @submit.prevent="submitForm">
              <div class="container2">
                <label for="id">이름</label>
                <input type="text" name="demo-name" id="demo-name" value="" placeholder="이름"/><br>
                <label for="id">휴대폰번호</label>
                <input type="text" name="demo-name" id="demo-name" value="" placeholder="휴대폰번호"/><br>
                <input type="button" name="demo-name" id="demo-name" value="인증번호 전송"/><br><br>
                <textarea name="demo-name" id="demo-name"></textarea><br>
                <input type="submit" value="확인" class="primary"/>
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
  name: "MyInfo"
}
</script>

<style scoped>

</style>