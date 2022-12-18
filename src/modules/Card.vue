<template>
  <article class="product" :class="{opacity: isSold}">
    <div class="product__img">
      <img :src="src" alt="picture">
    </div>

    <div class="product__main">
      <h2 class="product__title">{{ card.title }}</h2>
    </div>

    <div v-if="!isSold" class="product__footer">
      <div class="product__info">
        <div class="product__price_old">{{ oldPrice }}</div>
        <div class="product__price">{{ price }}</div>
      </div>

      <rs-button
        :type="card.status"
        :loading="loading"
        :disabled="isSelected || loading"
        @click="handleClick"
      >
        {{ buttonMessage }}
      </rs-button>
    </div>

    <div v-else class="product__message">
      Продана на аукционе
    </div>
  </article>
</template>

<script>
import { getFormattedPrice } from '../helpers/helpers';

export default {
  name: 'card-product',
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    price() {
      if (this.$validate.isNull(this.card.price) || this.$validate.isUndefined(this.card.price)) {
        return '';
      }

      return `${getFormattedPrice(this.card.price)} $`;
    },
    oldPrice() {
      if (this.$validate.isNull(this.card.oldPrice)
      || this.$validate.isUndefined(this.card.oldPrice)) {
        return '';
      }

      return `${getFormattedPrice(this.card.oldPrice)} $`;
    },
    buttonMessage() {
      if (this.isSelected && !this.loading) {
        return 'В корзине';
      }

      return 'Купить';
    },
    isSold() {
      return this.status === 'sold';
    },
    isSelected() {
      return this.status === 'selected';
    },
    isActive() {
      return this.status === 'active';
    },
    isSrc() {
      return this.$validate.isObjectWithFields(this.card, ['img']) && this.$validate.isNotEmptyString(this.card.img);
    },
    status() {
      return this.card.status;
    },
    src() {
      if (!this.isSrc) {
        return '';
      }

      /* eslint-disable */
      return require(`../assets/image/${this.card.img}.jpg`);
    },
    loading() {
      const loader = this.$store.getters.getLoading;

      return this.$validate.isObjectWithFields(loader, ['status']) && this.card.id === loader.id;
    },
  },
  methods: {
    handleClick() {
      if (this.isActive) {
        this.$emit('click', this.card.id);
      }
    },
  },
};
</script>
