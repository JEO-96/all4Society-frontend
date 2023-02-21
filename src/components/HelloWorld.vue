<script>
import axios from 'axios';

export default
{
  data: function() {
    return {
      boardList: []
    }
  }, 
  methods: {
    board() {
      axios.get(`api/getBoard.json`).then((response)=> {
        this.boardList = response.data
        console.log(this.boardList)
      }).catch(e=>console.error(e))
    },
  },
  mounted() {
    this.board()
  }
/*   data : () => ({
    img1 : require(`@/images/pic01.jpg`),
    img2 : require(`@/images/pic01.jpg`),
    img3 : require(`@/images/pic01.jpg`),
    img4 : require(`@/images/pic01.jpg`),
    img5 : require(`@/images/pic01.jpg`)
  }) */
  
}
</script>
<template>

  <div id="page-wrapper">

<!-- Header -->
  <div id="header">

    <!-- Inner -->
      <div class="inner">
        <header>
          <h1>All4SOCIETY</h1>
          <hr />
          <p>AllTogether</p>
        </header>
      </div>

    <!-- Nav -->


  </div>
<!-- Banner -->
  <section id="banner">
    <header>
      
      <h4>올포랜드 동호회 All4SOCIETY</h4>
      <p>
        다양한 동호회 활동을 통해
      </p>
    </header>
  </section>

<!-- Carousel -->
  <section class="carousel" background:black>
    <div class="reel">
      
      <!-- <router-link to="/SocietyBoardSport"> -->
        <article v-for="boardlist in boardList" :key="boardlist">
        <br>
        <header>
            <!-- <li v-for="boardlist in boardList" :key="boardlist"> -->
            <p>{{ boardlist.boardName }}</p>
            <h3>{{ boardlist.boardSubIntro }}</h3>
            <!-- </li> -->
        </header>
        <p></p>
      </article>
    <!-- </router-link> -->
    </div>
  </section>

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
              <form>
              </form>
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
</template>

