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
      axios.get(`api/board/study.json`).then((response)=> {
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
          <p>스터디</p>
		</header>
	</div>


</div>


 <div class="wrapper style1">

<div class="container3">
	
	<div class="top" v-for="StudyList in StudyList" :key="StudyList">
		<h2 v-if="StudyList.boardName == null">동호회가 아직 없습니다!</h2>
		<div class="col-8 col-12-mobile" id="content" style:border="1px">
			<article id="main">

				<header>
					<h2>{{ StudyList.boardName }}</h2><br>
						<h3>동호회 회장 : {{ StudyList.boardManagerName }}</h3>
					
				</header>
				
				<a class="image featured"><img :src="require(`@/images/pic01.jpg`)" alt="" style="float: center; width:100%; height:325px"></a>
			

					<table>
						<tr>
							<th>
								<h3 style="text-align: center;">동호회 소개</h3><br>
							</th>
						</tr>
						<tr>
							<td>
								{{ StudyList.boardIntro }}
							</td>
						</tr>
					
				</table>

				<table class="type03">
					<tr>
						<th>
							<h3 style="text-align: left;">가입조건</h3>
						</th>
						<td>
							<p>{{ StudyList.boardCondition }}</p>
						</td>
					</tr>
					<tr>
						<th>
							<h3 style="text-align: left;">장소</h3>
						</th>
						<td>
							<p>{{ StudyList.boardPlace }}</p>
						</td>
					</tr>
					<tr>
						<th>
							<h3 style="text-align: left;">시간</h3>
						</th>
						<td>
							<p>{{ StudyList.boardTime }}</p>
						</td>
					</tr>
					<tr>
						<th>
							<h3 style="text-align: left;">회비</h3>
						</th>
						<td>
							<p>{{ StudyList.boardMoney }}</p>
						</td>
					</tr>
					<tr>
						<th>
							<h3 style="text-align: left;">문의처</h3>
						</th>
						<td>
							<p>{{ StudyList.boardManagerPhone }}</p>
						</td>
					</tr>
					
			
				</table>
				<br><br><br>

			</article>
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