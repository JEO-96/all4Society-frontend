<style>  @import '../assets/css/main.css';

</style>
<script>
import axios from 'axios';
export default
{
  data: function() {
    return {
      StudyList: [],
	img1 : require(`@/images/pic01.jpg`),
    img2 : require(`@/images/pic01.jpg`),
    img3 : require(`@/images/pic01.jpg`),
    img4 : require(`@/images/pic01.jpg`),
    img5 : require(`@/images/pic01.jpg`)
    }
  }, 
  methods: {
    board() {
      axios.get(`api/board/music.json`).then((response)=> {
        this.StudyList = response.data
        console.log(this.StudyList)
      }).catch(e=>console.error(e))
    },
  },
  mounted() {
    this.board()
  }

}

</script>
<template>
        <nav id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/registerSociety">동호회 게시판 생성</router-link> |
      <router-link to="/calendarview">Calendar</router-link> |
      <router-link to="/myInfo">myInfo</router-link> |
      <router-link to="/Logout">Logout</router-link>
      

    </nav>
    <!DOCTYPE HTML>
    <!--
      Massively by Pixelarity
      pixelarity.com | hello@pixelarity.com
      License: pixelarity.com/license
    -->
    <html>
	<head>
		<title>All4SOCIETY</title>
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
			<h1><a href="/" id="logo">All4SOCIETY</a></h1>
			<hr />
          <p>기타</p>
		</header>
	</div>


</div>

<!-- Main -->
<div class="wrapper style1">

<div class="container">
	
<!-- Main -->
 <div class="wrapper style1">

<div class="container">
	<h2 v-if="StudyList.boardName == null">동호회가 아직 없습니다!</h2>
	<div class="row gtr-200"  v-for="StudyList in StudyList" :key="StudyList">
		<h2 v-if="StudyList.boardName == null">동호회가 아직 없습니다!</h2>
		
		<div class="col-8 col-12-mobile" id="content">
			<article id="main">
				<header>
					<h2><a href="#">{{ StudyList.boardName }}</a></h2>
					<p>
						{{ StudyList.boardSubIntro }}
					</p>
					
				</header>
				<a class="image featured"><img :src="img2" alt="" style="float: center; width:100%; height:300px"></a>
				<div center>
						<h3>가입조건</h3>
					<strong>
						{{ StudyList.boardCondition }}
					</strong><br><br>
					<h3>장소 / 시간</h3>
					<strong>
						장소 : {{ StudyList.boardPlace }} / 시간 : {{ StudyList.boardTime }}
					</strong><br><br>
					<h3>회비</h3>
					<strong>
						{{ StudyList.boardMoney }}
					</strong>
					<hr>
				</div>
			</article>
		</div>
		<div class="col-4 col-12-mobile" id="sidebar">
			<hr class="first" />
			
			<section>
				<header>
					<h3><a href="#">동호회 회장 : {{ StudyList.boardManagerName }}</a></h3>
				</header>
			</section>
			<hr>
			<section>
				<header>
					<p>소개</p>
					<h3><a href="#">{{ StudyList.boardName }}과(와) 함께헤요</a></h3>
					<br>{{ StudyList.boardIntro }}
				</header>



				<footer>
					<hr><h3>문의처 <br><br> {{ StudyList.boardManagerPhone }}</h3>
				</footer>
			</section>

		</div>
	</div>

	
</div>

</div>
</div>

</div>

			<!-- Footer -->
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Contact -->
            <section class="contact">
              <header>
                <h3>Nisl turpis nascetur interdum?</h3>
              </header>
              <p>Urna nisl non quis interdum mus ornare ridiculus egestas ridiculus lobortis vivamus tempor aliquet.</p>
            </section>

          <!-- Copyright -->
            <div class="copyright">
              <ul class="menu">
                <li>&copy; Untitled. All rights reserved.</li>
              </ul>
            </div>

        </div>

      </div>
    </div>
  </div>

		</div>


	</body>
</html>
  </template>