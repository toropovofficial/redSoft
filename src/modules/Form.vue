<template>
  <form @submit.prevent="handleSubmit" action="">
    <rs-input
      :value="inputValue"
      :placeholder="placeholder"
      @update:value="newValue => inputValue = newValue"
    >
    </rs-input>
    <rs-button>Найти</rs-button>
  </form>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    placeholder: {
      type: String,
      default() {
        return 'Введите значение';
      },
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.inputValue);
    },
  },
};
</script>
