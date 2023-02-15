
<template>

  <div id="page-wrapper">

<!-- Header -->
  <div id="header">

    <!-- Inner -->
      <div class="inner">
        <header>
          <h1><router-link to="/">All4SOCIETY</router-link></h1>
          <hr />
          <p>AllTogether</p>
        </header>
      </div>

    <!-- Nav -->


  </div>
<!-- Banner -->
  <section id="banner">
    <header>
      <h2>동호회 모집</h2>
      <p>
        A lectus varius nisl aenean at Tempus orci cursus nec auctor morbi cep non dictum.
      </p>
    </header>
  </section>

<!-- Carousel -->
  <section class="carousel">
    <div class="reel">

      <article>
       <img :src="img1" alt="">    
 
        <header>
          <h3><router-link to="/societyBoard">골프 동호회</router-link></h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
      </article>

      <article>
        <img :src="img2" alt="">  
        <header>
          <h3><router-link to="/societyBoard">골프 동호회</router-link></h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
      </article>

      <article>
       <img :src="img3" alt="">
        <header>
          <h3><router-link to="/societyBoard">골프 동호회</router-link></h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
      </article>

      <article>
        <img :src="img4" alt=""> 
        <header>
          <h3><router-link to="/societyBoard">골프 동호회</router-link></h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
      </article>

  

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