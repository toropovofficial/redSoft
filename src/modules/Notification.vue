<template>
  <div
    class="global-notifications-system"
  >
    <transition-group name="list" tag="div">
      <notification
        v-for="notification in notifications"
        :key="notification.id"
        :id="notification.id"
        :type="notification.type"
        :text="notification.text"
        :hide-button="notification.hideButton"
        @close="handleClose"
      />
    </transition-group>
  </div>
</template>

<script>
import { generateRandomString } from '../helpers/helpers';
import notification from '../components/Notification.vue';

export default {
  name: 'global-notification',
  components: {
    notification,
  },
  mounted() {
    document.addEventListener('notify', (event) => {
      const { detail } = event;
      const id = generateRandomString();

      this.$nextTick(() => {
        /* eslint-disable */
        this.notifications.push(Object.assign({}, detail, { id }));

        setTimeout(
          /* eslint-disable */
          () => this.notifications = this.notifications.filter((notification) => {}),
          detail.duration || 5000,
        );
      });
    });
  },
  data() {
    return {
      notifications: [],
    };
  },
  computed: {
    shown() {
      return this.$validate.isNotEmptyArray(this.notifications);
    },
  },
  methods: {
    handleClose(id) {
      this.notifications = this.notifications.filter((notification) => notification.id !== id);
    },
  },
};
</script>
