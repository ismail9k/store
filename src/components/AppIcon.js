import icons from '@/assets/data/icons.json';

export default {
  name: 'AppIcon',
  functional: true,
  inheritAttrs: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: 'normal'
    }
  },
  render(h, { props, data }) {
    let icon = icons[props.name];
    if (!icon) {
      return;
    }

    const styleClasses = ['icon', `is-${props.name}`, `is-${props.size}`, `is-${props.color}`, data.staticClass];
    const children = [];

    // add empty square
    children.push(
      h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })
    );
    // add icon title
    children.push(h('title', props.name));
    children.push(
      h('path', {
        attrs: {
          d: icon
        }
      })
    );

    return h(
      'svg',
      {
        attrs: {
          class: styleClasses.join(' '),
          viewBox: '0 0 24 24'
        }
      },
      children
    );
  }
};
