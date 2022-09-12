<template>
  <div class="navbar">
    <div class="navText" @click="$router.push('/')"> Where is the World?</div>
    <div :class="['darkMode']" @click="toggleDarkMode()">☾ Dark Mode</div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data:() => ({
        theme: 'light' 
    }),

    methods:{
  
    }
  }

</script>

<style scoped>
.navbar{
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding-inline: 40px;
  align-items: center;
  background-color: #ffffff;
  color: rgb(8, 8, 8);
  position: sticky;
  top: 0;
  z-index: 100;
  
}

.navText{
  cursor: pointer;
  font-weight: 800;
  font-size: 16px;
}

.darkMode{
  cursor: pointer;
}

.light{
  background-color: #eef0f4;
}
.dark{
  background: #040404;
}
</style>