<style>  @import '../assets/css/main.css';

</style>
<template>
    
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
		</header>
	</div>


</div>

<!-- Main -->
<div class="wrapper style1">

<div class="container">
	<article id="main" class="special">
			<h2><a href="#">동호회 등록 신청</a></h2>

		<section>
          <!-- <v-form ref="form" @submit.prevent="submitForm"> -->
            <div class="container2">
				<input type="text" id="memberName" v-model="memberName" name="memberName" placeholder="성명" required><br><br>
				<input type="text" id="memberDepartment" v-model="memberDepartment" name="memberDepartment" placeholder="부서" required><br><br>
				<input type="text" id="memberRank" v-model="memberRank" name="memberRank" placeholder="직급" required><br><br>
				<input type="text" id="memberPhone" v-model="memberPhone" name="memberPhone" placeholder="전화번호" required><br><br>
				<input type="text" id="memberReco" v-model="memberReco" name="memberReco" placeholder="추천인" required><br><br>
				<textarea id="memberApp" v-model="memberApp" name="memberApp" placeholder="경험 (있다면 어느정도 인지)"></textarea><br><br>
              <textarea id="memberIntro" v-model="memberIntro" name="memberIntro" placeholder="간단한 자기 소개 / 포부"></textarea><br><br>
              <button @click="handleJoin">신청하기</button>&nbsp;&nbsp;
              <button @click="goBack">뒤로가기</button>
            </div>
          <!-- </v-form> -->
        </section>
	</article>
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
  
<script>
import axios from 'axios';
import {reactive, toRefs} from '@vue/reactivity';
import { useRouter } from 'vue-router';
export default {
  data: function() {
    return {
	boardName: '',
	boardManagerName: '',
	boardPeople: '',
	boardIntro: ''
    }
  },
  setup () {
        const router = useRouter();

        const state = reactive({
            boardName:'',
            boardManagerName:'',
            boardPeople:'',
            boardIntro:''
        });

        const handleJoin = async() => {
            console.log('동호회 등록 클릭')
            const url = `api/board/register.json`;
            const headers = {"Content-Type":"application/json"};
            const body = {
                boardName : state.boardName,
                boardManagerName : state.boardManagerName,
                boardPeople : state.boardPeople,
                boardIntro : state.boardIntro
            }
            console.log("boardGO");
            console.log("body : " ,body);

            const  data  = await axios.post(url, body, {headers});
            console.log(data);

            if(data.status === 200){
                alert('동호회 신청완료');
                await router.push({path: '/'});
            }
        }
	
        return {
            state, ...toRefs(state), handleJoin
        };
    },
	methods:{
        goBack(){
            this.$router.go(-1); [2]
        }
    }
}

</script>
  
  <style scoped>
  
  </style>