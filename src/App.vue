<template>
  <div id="app">
    <global-notification></global-notification>
    <header>
      <div class="container">
        <navigation-menu></navigation-menu>
      </div>
    </header>
    <div class="container">
      <router-view/>
    </div>

    <footer>
      <div class="container">
        <navigation-menu :location="'footer'"></navigation-menu>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationMenu from './modules/Navigation.vue';
import GlobalNotification from './modules/Notification.vue';

export default {
  components: {
    NavigationMenu,
    GlobalNotification,
  },
};
</script>
