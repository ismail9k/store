export default {
  name: 'AppButton',
  functional: true,
  props: {
    state: {
      type: String,
      default: 'default'
    },
    outline: {
      type: Boolean,
      default: false
    },
    clean: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, slots }) {
    const styleClasses = ['button', `is-${props.state}`];
    if (props.outline) {
      styleClasses.push('is-outline');
    }
    if (props.clean) {
      styleClasses.push('is-clean');
    }
    if (props.block) {
      styleClasses.push('is-block');
    }
    return h(
      'button',
      {
        class: styleClasses.join(' ')
      },
      slots().default
    );
  }
};
