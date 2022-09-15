import { createStore } from 'vuex'
import { getCountry,getRegion,singleCountry} from '@/api/countryAll';

export default createStore({
  state: {
    countryList: [], // Guatemala
    countries: null, // GHana, Nigeria, USA
    loading: false,
  },
  getters: {
    countryCodeObj(state){
      const newObj = {};
      const countries = state.countries;

      countries.forEach((country) => {
        const cca3 = country.cca3;
        newObj[cca3] = country.name.common
      })

      return newObj
    }
  },
  mutations: {
    UPDATE_LIST(state, countries) {
      state.countries = countries;
    },
    SET_LOADING(state, loadingState){
      state.loading = loadingState
    },
    SET_COUNTRY(state, countryList){
      state.countryList = countryList
    },
  },
  actions: {
    async fetchCountry({commit}, options){
      try {
        commit('SET_LOADING', true)
        const {region, searchKeyword} = options
        
        let response;
        if(region){
          response = await getRegion(region)
          const data =  response.data
          commit('UPDATE_LIST', data)
        }else if (searchKeyword) {
          response = await singleCountry(searchKeyword)
          const data = response.data
          commit('UPDATE_LIST', data)
        }
        else{
          response = await getCountry()
          const data = response?.data
          commit('UPDATE_LIST', data)
        }
      } catch (error) {
        console.log(error)
      }finally {
        commit('SET_LOADING', false)
      }
    },

    async fetchSingleCountry({commit}, country){
      try {
        commit('SET_LOADING', true)
        let response = await singleCountry(country)
        const data= response.data
        commit('SET_COUNTRY', data)
       

      } catch (error) {
        console.log(error)
      }finally {
        commit('SET_LOADING', false)
      }
    },

     
  
  },
  modules: {
  }
})
