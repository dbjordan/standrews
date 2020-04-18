<template>
  <footer class="footer mt-auto py-3 font-small">
      <div class="container">
        <div id="footer" class="row">
          <div class='col-8'></div>

          <div class='col-4'>
            <a href="mailto:info@standrewspres.net">
              <font-awesome-icon :icon="['fas', 'envelope']"/>
            </a>&nbsp;&nbsp;
            <a href="http://www.facebook.com/people/St-Andrews-Presbyterian-Church/100001314773602" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']"/>
            </a>&nbsp;&nbsp;
            <a href="https://www.youtube.com/watch?v=2aSbC01I-gA&amp;list=PLNWCqPyhVT4KHDNM0ri9Rs2FWJBthFfGZ" target="_blank" title="Latest Sermon">
              <font-awesome-icon :icon="['fab', 'youtube']"/>
            </a>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
