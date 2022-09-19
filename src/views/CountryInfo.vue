import { mapState } from 'vuex';
<template>
  <div class="about">
    <button class="btn" @click="goBack">	&larr; Back</button>
    <loadingState v-if="loading"/>
    <div class="content" v-else>
      <div class="poster" v-for="county in countryList" :key="county">
        <div class="image">
            <img :src="county.flags.png" alt="">
        </div>
      
        <div class="country-details">
          <h1 class="title">{{county?.name?.common}}</h1>
          <div class="side-content">
            <div class="side-1">
              <p><span class="bold">Native name: </span> {{Object.values(county.name.nativeName)[0].common}}</p>
              <p>
                <span class="bold">Population:</span>
                {{ county?.population }}
              </p>
              <p>
                <span class="bold">Region:</span>
                {{ county?.region }}
              </p>
              <p>
                <span class="bold">Sub Region:</span>
                {{ county?.region }}
              </p>
              <p>
                <span class="bold">Capital:</span>
                {{ county?.capital?.toString() }}
              </p>
            </div>
            <div class="side-2">
              <p>
                <span class="bold">Top Level Domain:</span>
                {{ county?.tld.toString() }}
              </p>
              <p>
                <span class="bold">Currencies:</span>
                {{Object.values(county.currencies)[0].name }}
              </p>
              <p>
                <span class="bold">Languages:</span>
                {{ county.languages.spa }}
              </p>
            </div>
          </div>
          <div class="side-3">
            <span class="bold">Border Countries:</span>  
            <span class="border" v-for="code in county.borders" 
              :key="code"
              @click="findCountry(countryCodeObj[code])">
              {{countryCodeObj[code]}} 
            </span>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
import {mapState, mapActions, mapGetters} from 'vuex'


export default {
  name: 'SingleCountry',
  data: () =>{

  },
  mounted(){
    const country= this.$route.params.country
    this.fetchCountry("")
    this.fetchSingleCountry(country)
  },
  methods:{
     ...mapActions(['fetchSingleCountry', 'fetchCountry']),
    goBack(){
      this.$router.back()
    },

    findCountry(countryCode) {
      this.fetchSingleCountry(countryCode)
      this.$router.push(countryCode);
    }
  },
  computed: {
    ...mapState(['loading', 'countryList']),
    ...mapGetters(['countryCodeObj']),
  },
  watch:{
    $route(){
      const country= this.$route.params.country
      this.fetchSingleCountry(country)
    }
  }
}
</script>

<style scoped>

  .about{
    margin-inline: 40px;
  }
  .btn{
    max-width: 20rem;
    margin-block: 1rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    padding: 0.7rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: white;
    font-size: 16px;
    font-weight: 500;
  }

  .poster{
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 8rem;
    margin-top: 4rem;
  }

  .image img{
    width: 100%;
    height: 100%;
  }

  .side-content{
    display: flex;
    justify-content: space-between;
  }

  .title{
    font-size: 1.5rem;
    font-weight: 800;
  }

  .bold{
    font-weight: 700;
  }

  .side-3{
    margin-top: 3rem;
    align-items: center;
  }
  .border{
    display: inline-flex;
    background-color: white;
    color: black;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    .poster{
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .side-content{
      display: flex;
      flex-direction: column;
    }
  }
</style>
