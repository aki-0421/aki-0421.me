import {
  Box,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import type { MDXComponents } from 'mdx/types';
import type { ReactElement } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: any): ReactElement => (
      <Heading my={8} fontSize="1.8em" color="font.heading" {...props} />
    ),
    h2: (props: any): ReactElement => (
      <Heading my={4} fontSize="1.4em" color="font.heading" {...props} />
    ),
    p: (props: any): ReactElement => <Text lineHeight={1.7} {...props} />,
    ul: (props: any): ReactElement => (
      <UnorderedList pl={2} my={2} lineHeight={1.7}>
        {props.children}
      </UnorderedList>
    ),
    ol: (props: any): ReactElement => (
      <OrderedList pl={2} my={2} lineHeight={1.7}>
        {props.children}
      </OrderedList>
    ),
    li: (props: any): ReactElement => (
      <ListItem lineHeight={1.7}>{props.children}</ListItem>
    ),
    Link: ({ href, ...props }: any): ReactElement => (
      <Link
        href={href}
        color="accent.pink"
        _hover={{ textDecoration: 'none', opacity: 0.8 }}
        {...props}
      />
    ),
    Image: ({ src, ...props }): ReactElement => (
      <Box p={4}>
        <Image
          src={src}
          w="100%"
          userSelect="none"
          pointerEvents="none"
          border="1px"
          borderColor="border"
          borderRadius="8px"
          {...props}
        />
      </Box>
    ),
    ...components,
  };
}
