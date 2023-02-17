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
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    <link rel="stylesheet" href="assets/css/main.css"/>
    <noscript>
      <link rel="stylesheet" href="assets/css/noscript.css"/>
    </noscript>
  </head>
  <body className="no-sidebar is-preload">


  <!-- Header -->
  <div id="header">

    <!-- Inner -->
    <div className="inner">
      <header>
        <h1><a href="index.html" id="logo">All4SOCIETY</a></h1>
      </header>
    </div>
  </div>

  <!-- Main -->
  <div className="wrapper style1">
    <div className="container">
      <article id="main" className="special">
        <header>
          <h2><a href="#">회원가입</a></h2>
        </header>
        <section>
          <!-- <v-form ref="form" @submit.prevent="submitForm"> -->
          <div className="container2">
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" v-model="id" name="memberId" @keyup="handIDcheck">
            <label>{{ id check }}</label>
            <br>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="memberPw" v-model="pw"><br>
            <label htmlFor="passwordConfirm">비밀번호확인</label>
            <input type="password" id="passwordConfirm" v-model="pwConfirm"><br>
            <label htmlFor="phone">휴대폰 번호</label>
            <input type="text" id="phone" name="memberPhone" v-model="phone"><br>
            <label htmlFor="생년월일">생년월일</label>
            <input type="text" id="birth" name="memberBirth" v-model="birth"><br>
            <label htmlFor="introduce">자기소개</label>
            <textarea id="introduce" v-model="introduce" name="memberIntro"></textarea><br>
            <button @click="handleJoin">회원가입</button>
            <input type="button" value="뒤로가기"/>
          </div>
          <!-- </v-form> -->
        </section>
      </article>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
import axios from 'axios';
import {reactive, toRefs} from '@vue/reactivity';
import {useRouter} from 'vue-router';

export default {
  data: function () {
    return {
      id: '',
      pw: '',
      phone: '',
      birth: '',
      introduce: ''
    }
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      id: '',
      pw: '',
      phone: '',
      birth: '',
      introduce: ''
    });

    const handleJoin = async () => {
      console.log('회원가입버튼이 클릭됨')
      // 유효성 검사 실행
      const url = `api/member/join.json`;
      // 이미지 없으면 무조건 {"Content-Type":"application/json"};
      // 백엔드에서는 @RequestBody Member member로 받았다
      const headers = {"Content-Type": "application/json"};
      const body = {
        memberId: state.id,
        memberPw: state.pw,
        memberPhone: state.phone,
        memberBirth: state.birth,
        memberIntro: state.intro,
      }
      console.log("11");
      console.log("body : ", body);

      const {data} = await axios.post(url, body, {headers});
      console.log(data);

      if (data.status === 200) {
        alert('회원가입완료');
        router.push({path: '/'});
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

</style>