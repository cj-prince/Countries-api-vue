<template>
  <navBar/>
  <router-view/>
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  components: {
    navBar
  }
}
</script>

<style>

body{
  margin: 0;
  background-color: #eef0f4;
  color: rgb(0, 0, 0);
  
}

#app {
  font-family: Nunito Sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

.container{
  width: calc(100vw - 64px);
  margin-inline: auto;
}


</style>
