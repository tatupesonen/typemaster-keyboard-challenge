import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <Center py="2rem" mt="7rem">
      <Flex direction="column" gap="1rem">
        <Flex alignItems="center" gap="0.5rem" textColor="brand.darkGray">
          <Text fontWeight="semibold">Typemaster 2021</Text>
          <Text fontWeight="semibold">|</Text>
          <Text>All Rights Reserved</Text>
        </Flex>
        <Button
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tatupesonen/typemaster-keyboard-challenge"
          leftIcon={<SiGithub />}
        >
          View source
        </Button>
      </Flex>
    </Center>
  );
};
