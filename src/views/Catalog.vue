<template>
  <main class="catalog">
    <h1 class="catalog__title">Картины эпохи Возрождения</h1>

    <section v-if="hasProductList" class="catalog__products">
      <card-product
        v-for="card in productsList"
        :key="card.id"
        :card="card"
        @click="handleClick"
      >
      </card-product>
    </section>

    <span v-else class="empty-list-message">
      Список пуст
    </span>
  </main>
</template>

<script>
import CardProduct from '@/modules/Card.vue';
import _ from 'lodash';
import { preparedProductListForSave } from '../helpers/helpers';

export default {
  name: 'CatalogPage',
  components: {
    CardProduct,
  },
  created() {
    this.loadProductList();
  },
  computed: {
    productsList() {
      return this.$store.getters.getProductsList;
    },
    hasProductList() {
      return this.productsList.length > 0;
    },
  },
  methods: {
    loadProductList() {
      const localStorageProductList = localStorage.getItem('productList');

      if (localStorageProductList !== null) {
        const productListParce = JSON.parse(localStorageProductList);
        this.$store.dispatch('loadDefaultProductList', productListParce);
      }

      this.$store.dispatch('loadProducts');
    },
    handleClick(id) {
      this.$store.dispatch('changeLoadingStatus', id);
      let preparedProductList = _.cloneDeep(this.productsList);

      preparedProductList = preparedProductListForSave(preparedProductList, id);

      this.$store.dispatch('loadDefaultProductList', preparedProductList);

      this.$store.dispatch('updateProductsList', preparedProductList, id);

      this.$notify.success('Товар добавлен в корзину');
    },
  },
};
</script>
