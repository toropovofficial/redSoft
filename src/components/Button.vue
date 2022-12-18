<template>
  <button
    class="rs-button"
    :class="classes"
    @click="handleClick"
  >
    <img
      v-if="isSelected && !loading"
      class="rs-button__icon"
      src="../assets/image/check.png"
      alt="check"
    >

    <slot>Button</slot>

    <span v-if="loading">
      <rs-preloader></rs-preloader>
    </span>
  </button>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    size: {
      type: String,
      default() {
        return 'medium';
      },
    },
    type: {
      type: String,
      default() {
        return 'active';
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
    active: {
      type: Boolean,
      default() {
        return false;
      },
    },
    loading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    focus: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  computed: {
    sizeClass() {
      return `size-${this.size}`;
    },
    typeClass() {
      return `type-${this.type}`;
    },
    classes() {
      return {
        [this.sizeClass]: true,
        [this.typeClass]: true,
        disabled: this.disabled || this.loading,
      };
    },
    isSelected() {
      return this.type === 'selected';
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
