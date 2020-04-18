<template>
  <div class="auxiliaries">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import $ from 'jquery'

export default {
  name: 'Auxiliaries',
  components: {
    HelloWorld
  }
}



$(document).ready(function(){
  $('#auxiliaries').addClass('active');
});


</script>
