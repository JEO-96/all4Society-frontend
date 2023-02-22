
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
      
      <h4>올포랜드 동호회 커뮤니티 All4SOCIETY</h4>
      <p>
        다양한 카테고리 별 동호회를 모집하고 신청하세요
      </p>
    </header>
  </section>

<!-- Carousel -->
  <section class="carousel" background:black>
    <div class="reel">
      
      <router-link to="/societyBoardSport">
        <article>
        <br>
        <header>
          <p>스포츠</p>
          <h3>혼자 하기 힘들었던 스포츠 관련 취미를 올포랜드 동호회에서 함께해요.</h3>
        </header>
        <p></p>
      </article>
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

<script>
export default{
  data : () => ({
    img1 : require(`@/images/pic01.jpg`),
    img2 : require(`@/images/pic01.jpg`),
    img3 : require(`@/images/pic01.jpg`),
    img4 : require(`@/images/pic01.jpg`),
    img5 : require(`@/images/pic01.jpg`)
  })
  
}
</script>