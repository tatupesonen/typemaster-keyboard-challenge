import { Box, Button, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function TopBar() {
  return (
    <Box py={["1.5rem", "1.5rem", "2.2rem"]} px={["1.5rem", "1.5rem", "2.2rem"]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Logo height="40px" />
        <Button
          color="brand.darkBlue"
          _hover={{
            backgroundColor: "brand.darkBlue",
            color: "white",
          }}
          backgroundColor="brand.lightGray"
        >
          PRE-ORDER NOW
        </Button>
      </Flex>
    </Box>
  );
}
