<template>

  <router-view/>
</template>

<!-- -->

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

