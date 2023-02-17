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
            <form>
              <div class="container2">
                <label for="name">이름</label>
                <input type="text" id="name" placeholder="이름" required><br>
                <label for="name">휴대폰번호</label>
                <input type="text" id="birth" name="birth" placeholder="휴대폰번호" required><br>
                <input type="button" id="uname" name="uname" value="인증번호받기" placeholder="전화번호" required><br>
                <br>
                <input type="text" id="uname" name="uname" value="" placeholder="인증번호" required><br>
                <input type="submit" value="신청"/>
                <input type="reset" value="다시하기"/>
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
  name: "FindId"
}
</script>

<style scoped>

</style>