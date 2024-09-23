import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  w: 'full',
  mx: 'auto',
  maxW: '768px',
  px: { base: '16px', lg: '32px' },
  my: { base: 8, lg: 8 },
});

export const containerTheme = defineStyleConfig({
  baseStyle,
});
