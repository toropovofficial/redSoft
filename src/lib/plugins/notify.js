import notify from '../utils/notifications';

export default {
  install(Vue) {
    /* eslint-disable */
    Vue.prototype.$notify = notify;
  },
};
