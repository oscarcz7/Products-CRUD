import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    products: [],
    product: {
      id: '',
      name: '',
      quantity: 0,
      price: 0,
      codeProduct: '',
      category: ''
    }
  },
  mutations: {
    cargar(state, payload) {
      state.products = payload
    },
    set(state, payload) {
      state.products.push(payload)
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    eliminar(state, payload) {
      state.products = state.products.filter(item => item.id !== payload)
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    product(state, payload) {
      if (!state.products.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.product = state.products.find(item => item.id === payload)
    },
    update(state, payload) {
      state.products = state.products.map(item => item.id === payload.id ? payload : item)
      router.push('/')
      localStorage.setItem('products', JSON.stringify(state.products))
    }
  },
  actions: {
    cargarLocalStorage({ commit }) {
      if (localStorage.getItem('products')) {
        const products = JSON.parse(localStorage.getItem('products'))
        commit('cargar', products)
        return
      }

      localStorage.setItem('products', JSON.stringify([]))
    },
    setProducts({ commit }, product) {
      commit('set', product)
    },
    deleteProducts({ commit }, id) {
      commit('eliminar', id)
    },
    setProduct({ commit }, id) {
      commit('product', id)
    },
    updateProduct({ commit }, product) {
      commit('update', product)
    }
  },
  modules: {
  }
})
