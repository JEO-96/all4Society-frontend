<style>  @import '../assets/css/main.css';

</style>
<script></script>
<template>
      <nav id="nav" >
      <router-link to="/">Home</router-link> |
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
			<h2>동호회 게시판 생성 신청</h2>

		<section>
          <!-- <v-form ref="form" @submit.prevent="submitForm"> -->
            <form>
            <div class="container2">

        <select id="boardCategory" name="boardCategory" v-model="boardCategory" size="1">
            <option value="">&nbsp;&nbsp;카테고리&nbsp;&nbsp;</option>
            <option value="스포츠">&nbsp;&nbsp;스포츠&nbsp;&nbsp;</option>
            <option value="여행">&nbsp;&nbsp;여행&nbsp;&nbsp;</option>
            <option value="스터디">&nbsp;&nbsp;스터디&nbsp;&nbsp;</option>
            <option value="기타">&nbsp;&nbsp;기타&nbsp;&nbsp;</option>
        </select><br><br>
				<input type="text" id="boardName" v-model="boardName" name="boardName" placeholder="동호회명" required><br><br>
				<input type="text" id="boardManagerName" v-model="boardManagerName" name="boardManagerName" placeholder="동호회 매니저 이름" required><br><br>
        <input type="text" id="boardManagerPhone" v-model="boardManagerPhone" name="boardManagerPhone" placeholder="동호회 문의처 번호" required><br><br>
				<input type="text" id="boardPeople" v-model="boardPeople" name="boardPeople" placeholder="동호회 인원" required><br><br>
        <input type="text" id="boardPlace" v-model="boardPlace" name="boardPlace" placeholder="동호회 장소 (주로 진행되는 장소)" required><br><br>
        <input type="text" id="boardTime" v-model="boardTime" name="boardTime" placeholder="동호회 시간 (주로 진행되는 시간)" required><br><br>
        <textarea id="boardMoney" v-model="boardMoney" name="boardMoney" placeholder="동호회 회비 설명"></textarea><br><br>
        <textarea id="boardCondition" v-model="boardCondition" name="boardCondition" placeholder="가입 조건 설명"></textarea><br><br>
              <textarea id="boardIntro" v-model="boardIntro" name="boardIntro" placeholder="동호회 소개"></textarea><br><br>
              <input type="text" id="boardSubIntro" v-model="boardSubIntro" name="boardSubIntro" placeholder="동호회 소제목"><br><br>
               <!-- <input ref="image" id="file" type="file" name="image" accept="image/*" multiple="multiple"><br><br> -->
        
            </div>

          </form>
          <button @click="handleJoin">개설</button>&nbsp;&nbsp;
              <button @click="goBack">뒤로</button>
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


	
</html>
  </template>
  
<script>

const fileElement = document.querySelector('#file');
import axios from 'axios';
import {reactive, toRefs} from '@vue/reactivity';
import { useRouter } from 'vue-router';
export default {
  data: function() {
    return {
	boardName: '',
	boardManagerName: '',
	boardPeople: '',
	boardIntro: '',
  boardCategory: '',
  boardPlace:'',
            boardTime:'',
            boardMoney:'',
            boardCondition:'',
            boardSubIntro:'',
            boardManagerPhone:'',
            boardImage: '',
    }
  },
  setup () {
        const router = useRouter();

        const state = reactive({
            boardName:'',
            boardManagerName:'',
            boardPeople:'',
            boardIntro:'',
            boardCategory:'',
            boardPlace:'',
            boardTime:'',
            boardMoney:'',
            boardCondition:'',
            boardSubIntro:'',
            boardManagerPhone:''
        });

        const handleJoin = async() => {
            console.log('동호회 등록 클릭')
            const url = `api/board/register.json`;
            const headers = {"Content-Type":"application/json"};
            const body = {
                boardName : state.boardName,
                boardManagerName : state.boardManagerName,
                boardPeople : state.boardPeople,
                boardIntro : state.boardIntro,
                boardCategory : state.boardCategory,
                boardPlace : state.boardPlace,
                boardTime : state.boardTime,
                boardMoney : state.boardMoney,
                boardCondition : state.boardCondition,
                boardSubIntro : state.boardSubIntro,
                boardManagerPhone : state.boardManagerPhone
            }
            console.log("boardGO");
            console.log("body : " ,body);

            const  data  = await axios.post(url, body, {headers});
            console.log(data);

           
                alert('동호회 등록완료');
                await router.push({path: '/'});
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
  button {
  background-color: #483949;
  width: 150px;
  height: 70px;
  font-size: 20px;
}
  </style>