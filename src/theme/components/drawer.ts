import { drawerAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system';
import { runIfFn } from '@chakra-ui/utils';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $bg = cssVar('drawer-bg');

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string): any {
  if (value === 'full') {
    return definePartsStyle({
      dialog: { maxW: '100vw', h: '100vh' },
    });
  }
  return definePartsStyle({
    dialog: { maxW: value },
  });
}

const baseStyleOverlay = defineStyle({
  bg: 'transparent',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  zIndex: 'modal',
});

const baseStyleDialogContainer = defineStyle({
  display: 'flex',
  zIndex: 'modal',
  justifyContent: 'center',
});

const baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props;

  return {
    ...(isFullHeight && { height: '100vh' }),
    zIndex: 'modal',
    maxH: '100vh',
    color: 'inherit',
    _dark: {
      [$bg.variable]: 'component.bg',
    },
    bg: 'component.bg',
    boxShadow: 'none',
    borderRight: '1px',
    borderColor: 'border',
  };
});

const baseStyleHeader = defineStyle({
  p: 8,
  fontSize: '1em',
});

const baseStyleCloseButton = defineStyle({
  position: 'absolute',
  top: 4,
  insetEnd: '3',
});

const baseStyleBody = defineStyle({
  px: 4,
  py: 8,
  flex: '1',
  w: 'full',
});

const baseStyleFooter = defineStyle({
  px: '6',
  py: '4',
});

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter,
}));

const sizes = {
  xs: getSize('xs'),
  sm: getSize('md'),
  md: getSize('lg'),
  lg: getSize('2xl'),
  xl: getSize('4xl'),
  full: getSize('full'),
};

export const drawerTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'xs',
  },
});
