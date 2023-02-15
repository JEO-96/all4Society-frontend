<style>
  @import './assets/css/main.css';
</style>
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/studentlist">StudentList</router-link>
    <router-link to="/calendarview">Calendar</router-link>
    <router-link to="/tutorials">tutorials</router-link>
    <router-link to="/tutorial-details">tutorial-details</router-link>
    <router-link to="/add">add</router-link>
  </nav>
  <router-view/>
  <div id="page-wrapper">

<!-- Header -->
  <div id="header">

    <!-- Inner -->
      <div class="inner">
        <header>
          <h1><router-link to="/">Home</router-link></h1>
          <hr />
          <p>AllTogether</p>
        </header>
        <footer>
          <router-link to="/">Home</router-link>
        </footer>
      </div>

    <!-- Nav -->
      <nav id="nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li>
            <router-link to="/calendarview">Calendar</router-link>
          </li>
          <li><a href="left-sidebar.html">동호회 모집</a></li>
        </ul>
      </nav>

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
        <a href="societyBoard.html" class="image featured"><img :src="img1" alt="">           </a>
 
        <header>
          <h3><a href="#">Pulvinar sagittis congue</a></h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
      </article>

      <article>
        <a href="societyBoard.html" class="image featured"><img :src="img2" alt="">  </a>
        <header>
          <h3><a href="#">Fermentum sagittis proin</a></h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
      </article>

      <article>
        <a href="societyBoard.html" class="image featured"><img :src="img3" alt="">  </a>
        <header>
          <h3><a href="#">Sed quis rhoncus placerat</a></h3>
        </header>
        <p>Commodo id natoque malesuada sollicitudin elit suscipit magna.</p>
      </article>

      <article>
        <a href="societyBoard.html" class="image featured"><img :src="img4" alt="">  </a>
        <header>
          <h3><a href="#">Ultrices urna sit lobortis</a></h3>
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
    img1 : require(`./images/pic01.jpg`),
    img2 : require(`./images/pic01.jpg`),
    img3 : require(`./images/pic01.jpg`),
    img4 : require(`./images/pic01.jpg`),
    img5 : require(`./images/pic01.jpg`)
  })
  
}

</script>