import { createStore } from 'vuex'
import { getCountry,getRegion,singleCountry} from '@/api/countryAll';

export default createStore({
  state: {
    countryList: [],
    countries: null,
    loading: false,
  },
  getters: {
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
    }
  },
  actions: {
    async fetchCountry({commit}, options){
      try {
        commit('SET_LOADING', true)
        const region = options
        let response;
        if(region){
          response = await getRegion(region)
          const data =  response?.data
          // console.log(data)
          commit('UPDATE_LIST', data)
        }else{
          response = await getCountry()
          const data = response?.data
          // console.log(data)
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
        console.log(data)
        commit('SET_COUNTRY', data)
        commit('UPDATE_LIST', data)

      } catch (error) {
        console.log(error)
      }finally {
        commit('SET_LOADING', false)
      }
    }
  
  },
  modules: {
  }
})
