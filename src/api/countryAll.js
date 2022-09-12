import axios from "axios";

function getCountry(){
  return axios.get(`https://restcountries.com/v3.1/all`)
}

function getRegion(region){
  return axios.get(`https://restcountries.com/v3.1/region/${region}`)
}

function singleCountry(country){
 return axios.get(`https://restcountries.com/v3.1/name/${country}`)
}


export {getCountry, getRegion,singleCountry}