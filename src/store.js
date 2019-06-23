import Vue from 'vue';
import Vuex from 'vuex';

import db from './assets/data/db.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    addingItemToCart: false,
    imageObserver: new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.removeAttribute('data-loading');
          lazyImage.removeAttribute('data-src');
          observer.unobserve(lazyImage);
        }
      });
    })
  },
  mutations: {
    showProducts(state, { products }) {
      state.products = products;
    },
    addToCart(state, { product, quantity }) {
      // add item to cart list
      state.cart.push({ ...product, quantity });

      // notify user that item has been added to the cart
      // if there's an item being add, reset animation
      if (this.timeOut) {
        state.addingItemToCart = false;
        clearTimeout(this.timeOut);
        setTimeout(() => {
          state.addingItemToCart = true;
        }, 0);
        return;
      }
      // trigger cart animation
      state.addingItemToCart = true;
      this.timeOut = setTimeout(() => {
        state.addingItemToCart = false;
      }, 1800);
    },
    observe(state, el) {
      state.imageObserver.observe(el);
    },
    unobserve(state, el) {
      state.imageObserver.unobserve(el);
    }
  },
  actions: {
    async fetchProducts({ commit }, { page, perPage }) {
      // fake fetching data
      await new Promise(resolve => setTimeout(resolve, 1000));
      const start = perPage * (page - 1);
      const end = start + perPage;
      const products = db.products.slice(start, end);
      commit('showProducts', { products });
    }
  }
});
