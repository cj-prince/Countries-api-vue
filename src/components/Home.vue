<template>
  <div class="hello">
    <div class="top"  >
      <form class="input-container"  @submit.prevent="search">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" v-model="searchKeyword" placeholder="Search for a country... " >
      </form>
      <div class="selector" v-if="countries">
        <select class="country" v-model="region">
          <option  value="">All</option>
          <option   value="Africa">Africa</option>
          <option  value="Americas">Americas</option>
          <option  value="Asia">Asia</option>
          <option  value="Europe">Europe</option>
          <option  value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
    <loadingState v-if="loading"/>
    <div class="container">
      <div class="country-list" v-if="countries != 0 && !loading">
        <div class="countries" v-for="count in countries" :key='count.name'>
        <div class="image" @click="goToCountry(count.name.common)">
          <img :src="count.flags.png" alt="">
        </div>
        <div class="additional">
          <div class="name" > {{count.name.common}}</div>
          <div class="population">Population: {{count.population}}</div>
          <div class="population">Region: {{count.region}}</div>
          <div class="population" v-for="cap in count.capital" :key="cap">Capital: {{cap}}</div>
        </div>
        </div>
      </div>
    </div>
  
   
  
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'HomePage',
  props: {
  
  },
  data: () => ({
    region: '',
    searchKeyword:'',
  }),
  methods:{
    ...mapActions(['fetchCountry','fetchSingleCountry']),
    search(){
      this.fetchCountry({region:this.region, searchKeyword:this.searchKeyword})
      
    },
    goToCountry(name){
      this.$router.push(`/${name}`)
    }
  },
  computed:{
    ...mapState(['countryList', 'loading','countries',]),
  },

  watch:{
    region: function region(){
      this.fetchCountry({region:this.region, searchKeyword:this.searchKeyword})
    },

    searchKeyword: function searchKeyword() {
        this.fetchCountry({region:this.region, searchKeyword:this.searchKeyword});
    }
  },

  mounted() {
    this.fetchCountry({})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  display: flex;
  justify-content: space-between;
  margin-inline: 40px;
  margin-block: 30px;
}
   .input-container{
    width: calc(100vw - 64px);
    max-width: 250px;
    height: 25px;
    padding: 6px;
    background: #ffffff;
    border-radius: 5px;
    display: flex;
    justify-items: center;
    align-items: center;
    position: sticky;
    top: 72px;
  }

  .input-container input{
    flex-basis: 100%;
    background: transparent;
    border: none;
    padding: 10px;
    line-height: 21px;
  }

 .input-container input:focus,
  .input-container input:focus-within,
.input-container input:focus-visible{
    outline: none;
    border: none;
}

  .selector{
    padding-inline: 1rem;
    padding-block: 0.3rem;
    height: 25px;
    background: #ffffff;
    border-radius: 5px;
  }


  .country{
    border: none;
    outline: none;
  }

  .country-list{
    display: grid;
    margin-inline: auto;
    grid-template-columns: repeat(auto-fill, minmax(250px, auto));
    gap: 32px;
    margin-top: 72px;
  }
  .countries{
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  }

  .countries:hover{
    transform: scale(1.05);
  }

  .image img{
    width: 100%;
    cursor: pointer;
  }

  .name{
    font-weight: 800;
    font-size: 1.25rem;
    margin-bottom: 0.5rem
  }
  .additional{
    box-sizing: border-box;
    border: 0 solid #e2e8f0;
    padding-inline: 1.5rem;
    padding-block: 1rem;
  }

  .population{
    font-weight: 800;
  }

  @media (max-width: 600px) {
    .top{
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .selector{
      width: 86px;
    }
  }
</style>
