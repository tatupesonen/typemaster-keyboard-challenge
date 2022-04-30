import { Box, Flex, Image, Text, Heading, useBreakpointValue, Stack } from "@chakra-ui/react";
import deskBase from "../../assets/mobile/image-glass-and-keyboard.jpg";
import deskMd from "../../assets/tablet/image-glass-and-keyboard.jpg";
import deskXl from "../../assets/desktop/image-glass-and-keyboard.jpg";
import phoneBase from "../../assets/mobile/image-phone-and-keyboard.jpg";
import phoneMd from "../../assets/tablet/image-phone-and-keyboard.jpg";
import phoneXl from "../../assets/desktop/image-phone-and-keyboard.jpg";

import box from "../../assets/shared/pattern-square.svg";

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

  const imageSizeBreakPoints = { base: "193px", md: "20rem", xl: "20rem" };

  const showBox = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Box mt="2rem">
      <Flex
        direction={{ base: "column", xl: "row" }}
        justifyContent={{ base: "flex-start", md: "flex-start" }}
        gap="1.5rem"
        ml={{ base: "-1rem", md: "1.5rem" }}
        mx={{ base: "-1rem", md: "1.5rem" }}
      >
        <Stack position="relative" direction="row" gap="1.5rem">
          <Image position="absolute" overflow="hidden" bottom="0" left="-18rem" src={box} />
          <Box m={0} backgroundColor="brand.orange" borderRadius="3xl">
            <Image
              borderRadius="2xl"
              backgroundSize="cover"
              maxHeight={imageSizeBreakPoints}
              mixBlendMode="multiply"
              src={phone}
            />
          </Box>

          <Image borderRadius="2xl" backgroundSize="cover" maxHeight={imageSizeBreakPoints} src={desk}></Image>
        </Stack>
        <Box>
          <Flex
            justifyContent="space-between"
            alignItems={{ base: "center", xl: "flex-start" }}
            direction={{ base: "column", md: "row", xl: "column" }}
            ml={{ xl: "5rem" }}
            mt="4rem"
          >
            <Heading
              textAlign={["center", "left"]}
              fontWeight="black"
              size={headerSize}
              color="brand.darkBlue"
              textTransform="uppercase"
              maxW="11ch"
              mb={"1.5rem"}
            >
              Mechanical wireless keyboard
            </Heading>
            <Text
              fontWeight="semibold"
              maxWidth="45ch"
              textAlign={["center", "left"]}
              color="brand.darkGray"
              lineHeight="26px"
            >
              The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches
              and keycaps, along with reliable wireless connectivity.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
