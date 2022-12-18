<template>
  <div
    class="rs-preloader"
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
  name: 'rs-preloader',
  props: {
    color: {
      type: String,
      default() {
        return '#F4F6F9';
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
