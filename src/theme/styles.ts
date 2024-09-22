import type { Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: {
    body: {
      fontSize: '1em',
      fontFamily: 'body',
      color: 'font.text',
      bg: 'body.bg',
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: 'chakra-placeholder-color',
    },
    '*, *::before, &::after': {
      borderColor: 'border',
      wordWrap: 'break-word',
    },
    '.emoji-wrap': {
      pointerEvents: 'none',
      img: {
        display: 'inline-block',
      },
    },
  },
};

export default styles;
