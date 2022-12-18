<template>
  <div
    class="rs-global-notification"
    :class="{ 'shown': shown, [type]: true }"
  >
    <div class="frs-global-notification-icon">
      <img src="../assets/image/success.png" alt="">
    </div>

    <div class="rs-global-notification-text"  :class="{ 'without-button': hideButton }">
      {{ displayText }}
    </div>

    <div
      v-if="!hideButton"
      class="rs-global-notification-button"
      @click="handleClose"
      @keydown="handleClose"
    >
      OK
    </div>
  </div>
</template>

<script>

const DEFAULT_TEXT = {
  success: 'Сохранено',
  error: 'Произошла ошибка',
};

export default {
  name: 'global-notifications',
  props: {
    id: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'default',
    },
    text: {
      type: [String, null],
      default() {
        return null;
      },
    },
    hideButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      shown: false,
    };
  },
  computed: {
    displayText() {
      if (this.$validate.isNotUndefined(this.text) && this.$validate.isNotNull(this.text)) {
        return this.text;
      }

      return DEFAULT_TEXT[this.type];
    },
  },
  methods: {
    handleClose() {
      this.$emit('close', this.id);
    },
  },
};
</script>
