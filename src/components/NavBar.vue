<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link id='home' class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link id='news' class="nav-link" to="/news">News &amp; Events</router-link>
          </li>
          <li class="nav-item">
            <router-link id='mission' class="nav-link" to="/mission">Our Mission</router-link>
          </li>
          <li class="nav-item">
            <router-link id='team' class="nav-link" to="/team">Church Staff</router-link>
          </li>
          <li class="nav-item">
            <router-link id='auxiliaries' class="nav-link" to="/auxiliaries">Auxiliaries</router-link>
          </li>
          <li class="nav-item">
            <router-link id='history' class="nav-link" to="/history">History</router-link>
          </li>
          <li class="nav-item">
            <router-link id='contact' class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </nav>      
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
