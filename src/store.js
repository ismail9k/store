import Vue from 'vue';
import Vuex from 'vuex';

import db from './assets/data/db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    showProducts(state, { products }) {
      state.products = products;
    },
    addToCart(state, { product, quantity }) {
      state.cart.push({ ...product, quantity });
    }
  },
  actions: {
    async fetchProducts({ commit }, { page, perPage }) {
      // fake fetching data
      await new Promise(resolve => setTimeout(resolve, 300));
      const start = perPage * (page - 1);
      const end = start + perPage;
      const products = db.products.slice(start, end);
      commit('showProducts', { products });
    }
  }
});
