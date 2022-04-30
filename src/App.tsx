import { Box, Image, Text, Heading, Stack, Button, Flex, Center } from "@chakra-ui/react";
import { TopBar } from "./components/TopBar";
import { Hero } from "./components/Hero";
import orangeKb from "../assets/mobile/image-phone-and-keyboard.jpg";
import desk from "../assets/mobile/image-glass-and-keyboard.jpg";
import { Feature, FeatureProps } from "./components/Feature";
import BatteryIcon from "../assets/shared/icon-battery.svg";
import BluetoothIcon from "../assets/shared/icon-bluetooth.svg";
import CompatibleIcon from "../assets/shared/icon-compatible.svg";
import LightIcon from "../assets/shared/icon-light.svg";
import { Footer } from "./components/Footer";

function App() {
  const features: FeatureProps[] = [
    {
      heading: "highly compatible",
      icon: CompatibleIcon,
      body: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    },
    {
      heading: "wireless with bluetooth",
      icon: BluetoothIcon,
      ch: "15ch",
      body: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
    },
    {
      heading: "high capacity battery",
      icon: BatteryIcon,
      ch: "15ch",
      body: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
    },
    {
      heading: "RGB BACKLIT MODES",
      icon: LightIcon,
      ch: "15ch",
      body: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
    },
  ];
  return (
    <Box className="App" maxW="100%">
      <TopBar />
      {/* Hero */}
      <Hero />
      <Box mt="1.5rem">
        <Flex direction="row" gap="1rem" ml="-1rem">
          <Box backgroundColor="brand.orange" borderRadius="3xl">
            <Image borderRadius="2xl" backgroundSize="cover" maxHeight="193px" mixBlendMode="multiply" src={orangeKb} />
          </Box>

          <Image borderRadius="2xl" maxHeight="193px" src={desk}></Image>
        </Flex>
        <Box px="1rem">
          <Flex gap="1rem" alignItems="center" direction={{ base: "column", md: "row", xl: "column" }} mt="4rem">
            <Heading
              size="xl"
              textAlign={["center", "inherit"]}
              fontWeight="black"
              color="brand.darkBlue"
              textTransform="uppercase"
              maxW="11ch"
            >
              Mechanical wireless keyboard
            </Heading>
            <Text fontWeight="semibold" textAlign={["center", "inherit"]} color="brand.darkGray" lineHeight="26px">
              The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches
              and keycaps, along with reliable wireless connectivity.
            </Text>
          </Flex>
        </Box>
      </Box>
      <Stack mt="4rem" gap="2rem" px="1rem">
        {features.map((feat) => (
          <Feature {...feat} />
        ))}
      </Stack>
      <Footer />
    </Box>
  );
}

export default App;
