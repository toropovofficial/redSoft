<template>
  <nav class="nav">
    <div class="nav__menu">
      <img class="nav__logo" src="../assets/image/logo.jpg" alt="logo">

    <ul class="nav__items">
      <li class="item" v-for="item in items" :key="item.message">
        {{ item }}
      </li>
    </ul>
    </div>

    <div v-if="isHeaderMenu" class="nav__search">
    <formSearch
      :placeholder="'Поиск по названию картины'"
      @submit="handleSubmit"
    >
    </formSearch>
    </div>

    <div v-else class="nav__info">
      <div class="nav__phone">
        <img src="../assets/image/phone.png" alt="phone">

        <a href="tel: +74955555555">+7 (495) 555-55-55</a>
      </div>

      <div class="nav__adress">
        <img src="../assets/image/adress.png" alt="adress">

        <span>г. Москва, ул. Расплетина, 24</span>
      </div>
    </div>
  </nav>
</template>

<script>
import formSearch from './Form.vue';

export default {
  name: 'navigation-menu',
  components: {
    formSearch,
  },
  props: {
    location: {
      type: String,
      default() {
        return 'header';
      },
    },
  },
  data() {
    return {
      items: ['Каталог', 'Доставка', 'Оплата', 'Контакты', 'О галерее'],
    };
  },
  computed: {
    isHeaderMenu() {
      return this.location === 'header';
    },
  },
  methods: {
    handleSubmit(val) {
      this.$store.dispatch('loadProducts', val);
    },
  },
};
</script>
