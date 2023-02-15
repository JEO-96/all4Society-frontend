<template>
  <!DOCTYPE HTML>
  <!--
    Massively by Pixelarity
    pixelarity.com | hello@pixelarity.com
    License: pixelarity.com/license
  -->
  <html>
  <head>
    <title>내정보</title>
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
          <h1><a href="index.html" id="logo">내정보</a></h1>
        </header>
      </div>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li>
            <a href="#">Dropdown</a>
            <ul>
              <li><a href="#">Lorem ipsum dolor</a></li>
              <li><a href="#">Magna phasellus</a></li>
              <li><a href="#">Etiam dolore nisl</a></li>
              <li>
                <a href="#">And a submenu &hellip;</a>
                <ul>
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Phasellus consequat</a></li>
                  <li><a href="#">Magna phasellus</a></li>
                  <li><a href="#">Etiam dolore nisl</a></li>
                </ul>
              </li>
              <li><a href="#">Veroeros feugiat</a></li>
            </ul>
          </li>
          <li><a href="left-sidebar.html">Left Sidebar</a></li>
          <li><a href="right-sidebar.html">Right Sidebar</a></li>
          <li><a href="no-sidebar.html">No Sidebar</a></li>
        </ul>
      </nav>

    </div>

    <!-- Main -->
    <div class="wrapper style1">

      <div class="container">
        <article id="main" class="special">
          <header>
            <h2><a href="#">내정보</a></h2>
          </header>

            <section>
              <form>
                <div class="container2">
                  <input type="text" id="uname" name="uname" value="" placeholder="이름"required><br>
                  <input type="text" id="birth" name="birth" value="" placeholder="생년월일"required><br>
                  <input type="text" id="uname" name="uname" value="" placeholder="전화번호"required><br>
                  <input type="text" id="uname" name="uname" value="" placeholder="부서"required><br>
                  <input type="text" id="uname" name="uname" value="" placeholder="직급"required><br>
                  <textarea id="introduce" name="introduce" placeholder="소개" required></textarea><br>
                  <input type="submit" value="수정하기"/>
                  <input type="button" value="뒤로가기"></button>
                </div>
              </form>
            </section>

        </article>
      </div>

    </div>

    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>

  </body>
  </html>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>