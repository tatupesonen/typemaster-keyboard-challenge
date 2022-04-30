import { Box, Image, Text, Heading, Stack, Button, Flex, Center } from "@chakra-ui/react";
import { TopBar } from "./components/TopBar";
import { Hero } from "./components/Hero";
import orangeKb from "../assets/mobile/image-phone-and-keyboard.jpg";
import desk from "../assets/mobile/image-glass-and-keyboard.jpg";

function App() {
  return (
    <Box className="App" maxW="100%">
      <TopBar />
      {/* Hero */}
      <Hero />
      <Box mt="1.5rem">
        <Flex direction="row" gap="1rem" ml="-1.5rem">
          <Box backgroundColor="brand.orange" borderRadius="3xl">
            <Image borderRadius="3xl" backgroundSize="cover" maxHeight="193px" mixBlendMode="multiply" src={orangeKb} />
          </Box>

          <Image borderRadius="3xl" maxHeight="193px" src={desk}></Image>
        </Flex>
        <Flex alignItems="center" direction="column" mt="4rem">
          <Heading size="xl" fontWeight="black" color="brand.darkBlue" textTransform="uppercase" maxW="11ch">
            Mechanical wireless keyboard
          </Heading>
          <Text fontWeight="semibold" color="brand.darkGray" lineHeight="26px">
            Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing
            experience.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
