import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAnFfKOvyq0saZMaCkS2SyGeKLF-QOnhvs',
      authDomain: 'vue-ads-cars.firebaseapp.com',
      databaseURL: 'https://vue-ads-cars.firebaseio.com',
      projectId: 'vue-ads-cars',
      storageBucket: 'vue-ads-cars.appspot.com',
      messagingSenderId: '1057530030832'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
