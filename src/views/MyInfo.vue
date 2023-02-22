
<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default
   {
   data: function() {
    return {
      myPage: [],
      memberId: '',
      memberPw: '',
      memberPhone: '',
      memberBirth: '',
      memberHint: '',
      memberAnswer: '',
      memberIntro: '',
    }
   },
  methods: {
    info() {
      axios.get('api/myPage').then((response) => {
        this.myPage = response.data
        this.memberId = response.data[0].memberId;
        this.memberPw = response.data[0].memberPw;
        this.memberPhone = response.data[0].memberPhone;
        this.memberBirth = response.data[0].memberBirth;
        this.memberHint = response.data[0].memberHint;
        this.memberAnswer = response.data[0].memberAnswer;
        this.memberIntro = response.data[0].memberIntro;
      }).catch(e=>console.error(e))
    },
    modify() {
      const router = useRouter();
/*       const memberInfo = reactive({
      memberId: '',
      memberPw: '',
      memberPhone: '',
      memberBirth: '',
      memberHint: '',
      memberAnswer: '',
      memberIntro: '',
      }); */
            const headers = {"Content-Type":"application/json"};
            const body = {
                memberId : this.memberId,
                memberPw : this.memberPw,
                memberPhone : this.memberPhone,
                memberBirth : this.memberBirth,
                memberIntro : this.memberIntro,
                memberHint : this.memberHint,
                memberAnswer : this.memberAnswer,
            }
            const data = axios.post(`api/myPageModify.json`, body, {headers});
            console.log(data)
                 if(data.status === 200){
                alert('회원정보수정완료!');
                router.push({path: '/'});
            }
      }
    },

  created() {
    this.info();
  }
}
</script>

<template>
  <!--<template xmlns="http://www.w3.org/1999/html"> -->
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
  <!-- Header -->
  <div id="header">
    <!-- Inner -->
    <div class="inner">
      <header>
        <h1><a href="index.html" id="logo">All4SOCIETY</a></h1>
      </header>
<!--       <h1 style="color: #000000;">{{ myPage[0].memberId }}</h1>
                <h1 style="color: #000000;">{{ myPage.memberPw }}</h1> -->
    </div>
    <!-- Main -->
    <div class="wrapper style1">
      <div class="container">
        <article id="main" class="special">
          <header>
            <h2>내 정보</h2>
          </header>
          <section>
            <form>
              <div class="container2">
<!--                 <ul>
                  <li v-for="item in myPage" :key="item">
                    {{ item.memberId }}
                    {{ item.memberAnswer }}
                    {{ item.memberPhone }}
                    {{ item.memberIntro }}
                  
                  </li>
                </ul> -->
                <h3><label for="id">아이디</label></h3>
                <input style="text-align: center;" type="text" name="id" id="id" v-model="memberId" disabled/><br>
                <h3><label for="pw">비밀번호</label></h3>
                <input style="text-align: center;" type="password" name="pw" id="pw" v-model="memberPw"/><br>
                <h3><label for="phone">핸드폰 번호</label></h3>
                <input style="text-align: center;" type="text" name="phone" id="phone" v-model="memberPhone"/><br>
                <h3><label for="birth">생일</label></h3>
                <input style="text-align: center;" type="text" name="birth" id="birth" v-model="memberBirth"/><br>
                <h3><label for="intro">자기소개</label></h3>
                <textarea style="text-align: center;" name="intro" id="intro" v-model="memberIntro"></textarea><br>
                <button @click="modify">수정</button>
              </div>
            </form>
          </section>
        </article>
      </div>
    </div>
  </div>
  </html>
</template>

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
  width: 150px;
  height: 50px;
  font-size: 20px;
}
textarea{
  resize: none;
}
</style>

