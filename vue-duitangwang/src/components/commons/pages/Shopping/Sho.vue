<template>
  <div class="app">
    <Shopping></Shopping>
    <MovieBox></MovieBox>
  </div>
</template>

<script>

import Shopping from "./Shopping"
import MovieBox from "./MovieBox"
export default {
  name: 'App',
  components:{
      Shopping,
      MovieBox
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
}
</style>
