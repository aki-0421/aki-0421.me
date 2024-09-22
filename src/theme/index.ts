import { components } from '@/theme/components';
import foundations from '@/theme/foundations';
import semanticTokens from '@/theme/semantic-tokens';
import styles from '@/theme/styles';
import { extendTheme } from '@chakra-ui/react';
import type { ThemeConfig, ThemeDirection } from '@chakra-ui/theme';

const direction: ThemeDirection = 'ltr';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const overrides = {
  components,
  direction,
  ...foundations,
  semanticTokens,
  styles,
  config,
};

export default extendTheme(overrides);
