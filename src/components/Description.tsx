import { Box, Flex, Image, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import deskBase from "../../assets/mobile/image-glass-and-keyboard.jpg";
import deskMd from "../../assets/tablet/image-glass-and-keyboard.jpg";
import deskXl from "../../assets/desktop/image-glass-and-keyboard.jpg";
import phoneBase from "../../assets/mobile/image-phone-and-keyboard.jpg";
import phoneMd from "../../assets/tablet/image-phone-and-keyboard.jpg";
import phoneXl from "../../assets/desktop/image-phone-and-keyboard.jpg";

export const Description = () => {
  const desk = useBreakpointValue({
    base: deskBase,
    md: deskMd,
    xl: deskXl,
  });

  const phone = useBreakpointValue({
    base: phoneBase,
    md: phoneMd,
    xl: phoneXl,
  });

  const headerSize = useBreakpointValue({
    base: "xl",
    md: "lg",
  });
  const imageSizeBreakPoints = { base: "193px", md: "20rem" };
  return (
    <Box mt="2rem">
      <Flex
        direction="row"
        justifyContent={{ base: "flex-start", md: "flex-start" }}
        gap="1.5rem"
        ml={{ base: "-1rem", md: "2.2rem" }}
        mx={{ base: "-1rem", md: "2.2rem" }}
      >
        <Box backgroundColor="brand.orange" borderRadius="3xl">
          <Image
            borderRadius="2xl"
            backgroundSize="cover"
            maxHeight={imageSizeBreakPoints}
            mixBlendMode="multiply"
            src={phone}
          />
        </Box>

        <Image borderRadius="2xl" maxHeight={imageSizeBreakPoints} src={desk}></Image>
      </Flex>
      <Box px="2.2rem">
        <Flex
          gap="1rem"
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: "column", md: "row", xl: "column" }}
          mt="4rem"
        >
          <Heading
            textAlign={["center", "inherit"]}
            fontWeight="black"
            size={headerSize}
            color="brand.darkBlue"
            textTransform="uppercase"
            maxW="11ch"
          >
            Mechanical wireless keyboard
          </Heading>
          <Text
            fontWeight="semibold"
            maxWidth="45ch"
            textAlign={["center", "inherit"]}
            color="brand.darkGray"
            lineHeight="26px"
          >
            The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches
            and keycaps, along with reliable wireless connectivity.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
