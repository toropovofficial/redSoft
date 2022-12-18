<template>
  <input
    class="rs-input"
    :value="value"
    aria-label="test"
    :type="type"
    :placeholder="placeholder"
    @input.prevent="handleInput"
  />
</template>

<script>

export default {
  name: 'rs-input',
  props: {
    value: {
      type: String,
      default() {
        return '';
      },
    },
    type: {
      type: String,
      default() {
        return 'text';
      },
    },
    placeholder: {
      type: String,
      default() {
        return 'Введите значение';
      },
    },
  },
  methods: {
    handleInput(e) {
      const targetValue = e.target.value;

      this.$emit('update:value', targetValue);
    },
  },
};
</script>
