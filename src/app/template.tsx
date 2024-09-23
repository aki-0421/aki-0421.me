'use client';

import theme from '@/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import {
  Box,
  ChakraProvider,
  ColorModeScript,
  Container,
} from '@chakra-ui/react';
import type { ReactElement, ReactNode } from 'react';

type TemplateProps = {
  children: ReactNode;
};

export default function Template({ children }: TemplateProps): ReactElement {
  return (
    <>
      <CacheProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <Container>{children}</Container>
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
