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
@import '@/styles/dark.css';
@import '@/styles/light.css';
@import url('https://fonts.google.com/specimen/Nunito+Sans');

body{
  background-color: var(--bg);
  color: var(--text);
  margin: 0;
}

input{
  color: var(--input-color);
}



#app {
  font-family: 'Nunito', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

.container{
  width: calc(100vw - 64px);
  margin-inline: auto;
}

.border{
  background-color: var(--bg)
}


</style>
