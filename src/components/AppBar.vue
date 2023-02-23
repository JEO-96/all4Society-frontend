<template>
  
  <div v-if="memberId !== undefined">
  <nav id="nav" >
    <router-link to="/">Home</router-link> |
    <router-link to="/login">login</router-link>|
    <router-link to="/registerSociety">동호회 게시판 생성</router-link> |
    <router-link to="/calendarview">Calendar</router-link> |
    <router-link to="/myInfo">myInfo</router-link> |
    <router-link to="/Logout">Logout</router-link>
    <router-link to="/signup">signup</router-link>|
    {{memberId}} 로그인 됨
  </nav>
</div>
 <div v-if="memberId === undefined">
  <nav id="nav" >
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">signup</router-link>|
    <router-link to="/findId">findId</router-link>|
    <router-link to="/findPw">findPw</router-link>|

    {{memberId}} 로그인 안됨
  </nav>
</div> 
<router-view/>
</template>

<script>
import axios from 'axios';
export default
{
  data: function() {
    return {
      memberId: []
    }
  }, 
  methods: {
    board() {
      axios.get(`api/member/index`).then((response)=> {
        this.memberId = response.data
        console.log(this.memberId)
      }).catch(e=>console.error(e))
    },
  },
  mounted() {
    this.board()
  }

}

</script>