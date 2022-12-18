const DEFAULT_DURATION = 5000;

const TYPE_DEFAULT = 'default';
const TYPE_SUCCESS = 'success';

/* eslint-disable */
function sendNotification(type = TYPE_DEFAULT, text = null, hideButton = false, duration = DEFAULT_DURATION) {
  const event = new CustomEvent('notify', {
    detail: {
      type, text, hideButton, duration,
    },
  });

  document.dispatchEvent(event);
}

const notify = {
  success(text = null, hideButton = false, duration = DEFAULT_DURATION) {
    sendNotification(TYPE_SUCCESS, text, hideButton, duration);
  },
};

export default notify;
