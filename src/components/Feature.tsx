import { Button, Image, Text, Icon, IconButton, Center, Heading, Flex } from "@chakra-ui/react";

export type FeatureProps = {
  heading: string;
  body: string;
  ch?: string;
  icon: any;
};

export const Feature = ({ heading, body, icon, ch }: FeatureProps) => (
  <Flex alignItems="center" justifyContent="center" direction="column">
    <Button height="65px" width="65px" aria-label="feature" bgColor="brand.orange">
      <Image src={icon}></Image>
    </Button>

    <Heading
      size="xl"
      fontWeight="black"
      textAlign="center"
      py="1.5rem"
      color="brand.darkBlue"
      textTransform="uppercase"
      maxW={ch ?? "10ch"}
    >
      {heading}
    </Heading>

    <Text fontWeight="semibold" textAlign="center" color="brand.darkGray" lineHeight="26px">
      {body}
    </Text>
  </Flex>
);
