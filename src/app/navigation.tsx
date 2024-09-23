'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';

import type { ReactElement } from 'react';

export function Navigation(): ReactElement {
  return (
    <Flex
      zIndex={10}
      w="full"
      h="56px"
      align="center"
      justify="space-between"
      borderBottom="1px"
      borderColor="border"
    >
      <Container py={0}>
        <Flex w="full" h="full" align="center" justify="space-between">
          <Box>
            <Link
              href="/"
              prefetch={false}
              _hover={{
                textDecoration: 'none',
                opacity: 0.8,
              }}
            >
              <Flex align="center" gap={2}>
                <Image
                  src="/profile.png"
                  boxSize="36px"
                  border="1px"
                  borderColor="border"
                  borderRadius="50%"
                />
                <Heading fontSize="1em" color="font.heading">
                  Portfolio
                </Heading>
              </Flex>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
