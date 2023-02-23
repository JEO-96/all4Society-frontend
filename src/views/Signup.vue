<template xmlns="http://www.w3.org/1999/html">
      <nav id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>|
      <router-link to="/findId">findId</router-link>|
      <router-link to="/findPw">findPw</router-link>
      
    </nav>
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
          <!-- <v-form ref="form" @submit.prevent="submitForm"> -->
            <div class="container2">
              <form>
              <label for="id">아이디</label>
              <input type="text" id="id" v-model="id" name="memberId" @keyup="handIDcheck">
              <br>
              <label for="password">비밀번호</label>
              <input type="password" id="password" name="memberPw" v-model="pw"><br>
              <label for="passwordConfirm">비밀번호확인</label>
              <input type="password" id="passwordConfirm" v-model="pwConfirm"><br>
              <label for="name">성명</label>
              <input type="text" id="name" name="memberName" v-model="name"><br>
              <label for="phone">휴대폰 번호</label>
              <input type="text" id="phone" name="memberPhone" v-model="phone"><br>
              <!-- <label for="birth">생년월일</label>
              <input type="calendar" id="birth" name="memberBirth" v-model="birth"><br> -->

              <label for="introduce">자기소개</label>
              <textarea id="introduce" v-model="introduce" name="memberIntro"></textarea><br>
              </form>
              <button @click="handleJoin">회원가입</button>
            </div>
          <!-- </v-form> -->
        </section>
      </article>
    </div>
  </div>
  </html>
</template>

<script>
import axios from 'axios';
import {reactive, toRefs} from '@vue/reactivity';
import { useRouter } from 'vue-router';
export default {
  data: function() {
    return {
      id: '',
      pw: '',
      phone: '',
      birth: '',
      introduce: '',
      hint: '',
      answer: '',
    }
  },
  setup () {
        const router = useRouter();

        const state = reactive({
            id:'',
            pw:'',
            phone:'',
          name:'',
            birth:'',
            introduce:'',
            hint: '',
            answer: '',
        });

        const handleJoin = async() => {
            console.log('회원가입버튼이 클릭됨')
            // 유효성 검사 실행
            const url = `api/member/join.json`;
            // 이미지 없으면 무조건 {"Content-Type":"application/json"};
            // 백엔드에서는 @RequestBody Member member로 받았다 
            const headers = {"Content-Type":"application/json"};
            const body = {
                memberId : state.id,
                memberPw : state.pw,
                memberPhone : state.phone,
              memberName: state.name,
                memberBirth : state.birth,
                memberIntro : state.introduce,
                memberHint : state.hint,
                memberAnswer : state.answer,
            }
            console.log("11");
            console.log("body : " ,body);

            const data = await axios.post(url, body, {headers});
            console.log({data});

            if(data.status === 200){
                alert('회원가입완료');
                await router.push({path: '/login'});
            }
        }

/*         const handIDcheck = async() => {
            if(state.id.length > 0){ //아이디의 길이가 0보다 큰 경우
                const url = `/ROOT/api/member/idcheck.json?userid=${state.id}`;
                const headers = {"Content-Type":"application/json"};
                const { data } = await axios.get(url,{headers});
                console.log(data);  
                if(data.status === 200) {
                    if(data.result === true){
                        state.idcheck = '사용불가';
                    }
                    else {
                        state.idcheck = '사용가능';
                    }
                }
            }
        } */

        return {
            state, ...toRefs(state), handleJoin
        };
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Humanbumsuk';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Humanbumsuk.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

label {
  font-family: 'Humanbumsuk';
}

button {
  background-color: #483949;
  width: 170px;
  height: 50px;
  font-size: 17px;
}
</style>