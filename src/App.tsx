import { Box, Image, Text, Heading, Stack, Button, Flex, Center, SimpleGrid, Divider } from "@chakra-ui/react";
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
import { Description } from "./components/Description";

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
    <Box overflow={{ base: "hidden", md: "hidden", xl: "unset" }} className="App" maxW="1110px" mx="auto">
      <TopBar />
      {/* Hero */}
      <Hero />
      <Description />
      <Box mx="2.2rem" mt="6rem">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="3rem" spacingY={{ base: "4rem", md: "5rem" }}>
          {features.map((feat) => (
            <Feature {...feat} />
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
