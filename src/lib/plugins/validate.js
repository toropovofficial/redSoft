import validationRules from '../utils/validate';

export default {
  install(Vue) {
    /* eslint-disable */
    Vue.prototype.$validate = validationRules;
  },
};