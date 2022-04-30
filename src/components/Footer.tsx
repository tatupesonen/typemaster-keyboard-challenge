import { Box, Center, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Center py="2rem" mt="2rem">
      <Flex alignItems="center" gap="0.5rem" textColor="brand.darkGray">
        <Text fontWeight="semibold">Typemaster 2021</Text>
        <Text fontWeight="semibold">|</Text>
        <Text>All Rights Reserved</Text>
      </Flex>
    </Center>
  );
};
