import {
  Button,
  Image,
  Text,
  Icon,
  IconButton,
  Center,
  Heading,
  Flex,
  useBreakpointValue,
  ResponsiveValue,
} from "@chakra-ui/react";

export type FeatureProps = {
  heading: string;
  body: string;
  ch?: string;
  icon: any;
};

export const Feature = ({ heading, body, icon, ch }: FeatureProps) => {
  const align = useBreakpointValue({
    base: "center",
    md: "left,",
  });
  return (
    <Flex alignItems={align} justifyContent={align} direction="column">
      <Button height="65px" width="65px" aria-label="feature" bgColor="brand.orange">
        <Image src={icon}></Image>
      </Button>

      <Heading
        size="xl"
        fontWeight="black"
        /*
      // @ts-ignore */
        align={align}
        py="1.5rem"
        color="brand.darkBlue"
        textTransform="uppercase"
        maxW={ch ?? "10ch"}
      >
        {heading}
      </Heading>

      <Text
        fontWeight="semibold"
        /*
      // @ts-ignore */
        textAlign={align}
        color="brand.darkGray"
        lineHeight="26px"
      >
        {body}
      </Text>
    </Flex>
  );
};
