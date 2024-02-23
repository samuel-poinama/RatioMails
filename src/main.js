import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
  state() {
    return {
      sended: [],
      reived: [],
      user: {
        name: "",
        email: ""
      }
    }
  },
    mutations: {
        addSended(state, payload) {
            state.sended.push(payload)
        },

        addReived(state, payload) {
            state.reived.push(payload)
        },

        signInAndGetUser(user) {
            this.state.user = user
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
