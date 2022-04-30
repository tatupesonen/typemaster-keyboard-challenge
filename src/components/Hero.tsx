import { Box, Text, Image, Button, Flex, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import mobileKb from "../../assets/mobile/image-keyboard.jpg";
import tabletKb from "../../assets/tablet/image-keyboard.jpg";
import desktopKb from "../../assets/desktop/image-keyboard.jpg";

export const Hero = () => {
  const keyboard = useBreakpointValue({
    base: mobileKb,
    md: tabletKb,
    xl: desktopKb,
  });
  const headerSize = useBreakpointValue({
    base: "3xl",
    md: "2xl",
  });
  return (
    <Box overflow="hidden">
      <Flex direction={{ md: "row", base: "column" }} alignItems={{ base: "inherit", md: "center" }}>
        <Flex flex={1} direction="column" my="2.2rem" ml={["1.5rem", "1.5rem", "2.2rem"]}>
          <Heading size={headerSize} fontWeight="black" color="brand.darkBlue" textTransform="uppercase" maxW="11ch">
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
        </Flex>
        <Box flex={1.25}>
          <Image
            ml={{ base: "1.5rem", md: "5rem" }}
            maxH={{ md: "32rem", base: "inherit" }}
            backgroundSize="cover"
            borderTopLeftRadius="3xl"
            borderBottomLeftRadius="3xl"
            src={keyboard}
          />
        </Box>
      </Flex>
    </Box>
  );
};
