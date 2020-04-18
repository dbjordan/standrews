<template>
  <div class="team">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery'

export default {
  name: 'Team',
  components: {
  }
}



$(document).ready(function(){
  $('#team').addClass('active');
});


</script>
