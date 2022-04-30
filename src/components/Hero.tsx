import { Box, Text, Image, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import keyboard from "../../assets/mobile/image-keyboard.jpg";

export const Hero = () => {
  return (
    <Box overflow="hidden">
      <Stack mt="2rem" mx={["1.5rem", "1.5rem", "4rem"]}>
        <Heading size="3xl" fontWeight="black" color="brand.darkBlue" textTransform="uppercase" maxW="11ch">
          Typemaster keyboard
        </Heading>
        <Text py="1.5rem" fontWeight="semibold" color="brand.darkGray" lineHeight="26px">
          Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing
          experience.
        </Text>
        <Flex direction="row" alignItems="center">
          <Button color="white" bgColor="brand.orange" textTransform="uppercase">
            pre-order now
          </Button>
          <Text fontWeight="semibold" ml="1.5rem" textTransform="uppercase" color="brand.darkGray" lineHeight="26px">
            release on 5/27
          </Text>
        </Flex>
      </Stack>
      <Image ml={["1.5rem", "1.5rem", "2rem"]} mt="4rem" backgroundSize="cover" borderRadius="3xl" src={keyboard} />
    </Box>
  );
};
