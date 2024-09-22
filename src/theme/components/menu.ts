import { menuAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const $bg = cssVar('menu-bg');

const baseStyleList = defineStyle({
  [$bg.variable]: 'component.bg',
  borderColor: 'border',
  _dark: {
    [$bg.variable]: 'component.bg',
  },
  color: 'inherit',
  mx: 0,
  my: 0,
  w: '100%',
  maxW: ['300px', '300px'],
  p: 2,
  zIndex: 1,
  borderRadius: 'md',
  borderWidth: '1px',
  boxShadow: 'none',
  bg: 'component.bg',
});

const baseStyleItem = defineStyle({
  py: 3,
  px: 4,
  fontWeight: 700,
  transitionProperty: 'background',
  transitionDuration: 'ultra-fast',
  transitionTimingFunction: 'ease-in',
  _focus: {
    borderRadius: '8px',
    bg: 'component.hover',
  },
  _hover: {
    borderRadius: '8px',
    bg: 'component.hover',
  },
  _active: {
    borderRadius: '8px',
    bg: 'component.hover',
  },
  _expanded: {
    borderRadius: '8px',
    bg: 'component.hover',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  bg: $bg.reference,
});

const baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: 'semibold',
  fontSize: 'sm',
});

const baseStyleCommand = defineStyle({
  opacity: 0.6,
});

const baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: '1px solid',
  borderColor: 'inherit',
  my: '2',
  opacity: 0.6,
});

const baseStyleButton = defineStyle({
  transitionProperty: 'common',
  transitionDuration: 'normal',
});

const baseStyle = definePartsStyle({
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider,
});

export const menuTheme = defineMultiStyleConfig({
  baseStyle,
});
