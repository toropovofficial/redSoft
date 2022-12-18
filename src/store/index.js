import Vue from 'vue';
import Vuex from 'vuex';
import { getProductListByPhrase } from '../helpers/helpers';
import loadPost from '../services/services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultProductsList: [
      {
        img: 'Sandro',
        title: '«Рождение Венеры» Сандро Боттичелли',
        price: 1000000,
        oldPrice: '2000000',
        status: 'active',
        id: 1,
      },
      {
        img: 'Leonardo',
        title: '«Тайная вечеря»  Леонардо да Винчи',
        price: '3000000',
        oldPrice: null,
        status: 'active',
        id: 2,
      },
      {
        img: 'Mikelanjelo',
        title: '«Сотворение Адама»  Микеланджело',
        price: '5000000',
        oldPrice: 6000000,
        status: 'selected',
        id: 3,
      },
      {
        img: 'Rembrandt',
        title: '«Урок анатомии»  Рембрандт',
        price: '3000000',
        oldPrice: null,
        status: 'sold',
        id: 4,
      },
    ],
    productsList: [],
    loading: {
      status: false,
      id: null,
    },
  },
  getters: {
    getProductsList(state) {
      return state.productsList;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    setProductsList(state, values) {
      state.productsList = values;
    },
    setDefaultProjectList(state, values) {
      state.defaultProductsList = values;
    },
    setLoadingStatus(state, productId) {
      state.loading = {
        status: true,
        id: productId,
      };
    },
    resetLoadingStatus(state) {
      state.loading = {
        status: false,
        id: null,
      };
    },
  },
  actions: {
    changeLoadingStatus(ctx, id) {
      ctx.commit('setLoadingStatus', id);
    },
    loadDefaultProductList(ctx, list) {
      ctx.commit('setDefaultProjectList', list);
    },
    loadProducts(ctx, val) {
      if (typeof val === 'undefined' || val === '') {
        ctx.commit('setProductsList', this.state.defaultProductsList);

        return;
      }

      const newProductsList = getProductListByPhrase(ctx.state.defaultProductsList, val);

      ctx.commit('setProductsList', newProductsList);
    },
    async updateProductsList(ctx, list) {
      const post = await loadPost('https://jsonplaceholder.typicode.com/posts/1');

      if (!post) {
        ctx.commit('resetLoadingStatus');

        return;
      }

      ctx.commit('resetLoadingStatus');
      ctx.commit('setProductsList', list);

      localStorage.setItem('productList', JSON.stringify(list));
    },
  },
  modules: {
  },
});
