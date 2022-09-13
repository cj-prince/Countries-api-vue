<template>
  <div :class="[!isDarkMode ?'navbar':'darkNav']">
    <div class="navText" @click="$router.push('/')"> Where is the World?</div>
    <div :class="['light', ]" @click="toggle(!isDarkMode)"><p>{{this.isDarkMode?'🌞 Light Mode':' ☾ Dark Mode'}} </p> </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    data:() => ({
       isDarkMode: false
    }),

    methods:{
     toggle(payload) {
      this.isDarkMode = payload
      document.documentElement.className = payload
      localStorage.setItem('theme', payload)      
    }
    },
    mounted(){
      this.toggle(JSON.parse(localStorage.getItem({key: 'theme'})))
    },
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

.darkNav{
  background-color:  hsl(207, 26%, 17%);
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding-inline: 40px;
  align-items: center;
  color: rgb(254, 254, 254);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navText{
  cursor: pointer;
  font-weight: 800;
  font-size: 18px;
}

.light{
  cursor: pointer;
}

</style>