<template>
  <div
    class="preloader"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      borderColor: color,
      borderWidth: `${iconWidth}px`
    }"
  />
</template>

<script>

export default {
  name: 'rs-loader',
  props: {
    color: {
      type: String,
      default() {
        return 'blue';
      },
    },
    size: {
      type: Number,
      default() {
        return 20;
      },
    },
    iconWidth: {
      type: Number,
      default() {
        return 4;
      },
    },
  },
};
</script>
