import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingState from './components/loadingState.vue'

createApp(App).component('loadingState', loadingState).use(store).use(router).mount('#app')
