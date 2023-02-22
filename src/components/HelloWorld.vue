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
      
<<<<<<< HEAD
      <router-link to="/societyBoardSport">
        <article>
=======
      <!-- <router-link to="/SocietyBoardSport"> -->
        <article v-for="boardlist in boardList" :key="boardlist">
>>>>>>> branch 'main' of https://github.com/JEO-96/all4Society-frontend.git
        <br>
        <header>
            <!-- <li v-for="boardlist in boardList" :key="boardlist"> -->
            <p>{{ boardlist.boardName }}</p>
            <h3>{{ boardlist.boardSubIntro }}</h3>
            <!-- </li> -->
        </header>
        <p></p>
      </article>
<<<<<<< HEAD
    </router-link>

    <router-link to="/societyBoardStudy">
        <article>
        <br>
        <header>
          <p>스터디</p>
          <h3>회사 코딩 스킬 업 / 새로운 스킬 습득 자격증 공부 언어 공부까지 함께해요.</h3>
        </header>
        <p></p>
      </article>
    </router-link> 
    <router-link to="/societyBoardTrip">
        <article>
        <br>
        <header>
          <p>여행</p>
          <h3>주말에 함께가는 여행 / 등산 / 캠핑 등 여행 관련 정보를 공유해요.</h3>
        </header>
        <p></p>
      </article>
    </router-link>
     <router-link to="/societyBoardMusic">
        <article>
        <br>
        <header>
          <p>기타</p>
          <h3>다양한 카테고리의 동호회를 만나보세요.</h3>
        </header>
        <p></p>
      </article>
    </router-link>
=======
    <!-- </router-link> -->
>>>>>>> branch 'main' of https://github.com/JEO-96/all4Society-frontend.git
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

