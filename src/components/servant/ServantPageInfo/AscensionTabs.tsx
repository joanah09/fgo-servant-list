import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const AscensionTabs = ({
  ascensionImages,
}: {
  ascensionImages: Record<string, string>;
}) => {
  const { colorMode } = useColorMode();

  return (
    <Tabs
      defaultIndex={0}
      position="relative"
      variant="line"
      colorScheme="red"
      mx={0}
      bg={colorMode === "dark" ? "gray.700" : "gray.100"}
    >
      <Center h="50px" bg={colorMode === "dark" ? "red.700" : "red.400"}>
        <Text color={colorMode === "dark" ? "white" : "black"}>
          Ascension Stage
        </Text>
      </Center>
      <TabList w="100%">
        <Tab py={2} minW="25%">
          1
        </Tab>
        <Tab py={2} minW="25%">
          2
        </Tab>
        <Tab py={2} minW="25%">
          3
        </Tab>
        <Tab py={2} minW="25%">
          4
        </Tab>
      </TabList>
      <TabPanels mx={0}>
        {Object.keys(ascensionImages).map((key) => (
          <TabPanel key={key} p={0}>
            <Image
              boxSize="100%"
              maxW="350px"
              minW="320px"
              fit="cover"
              src={ascensionImages[key]}
              alt={`Ascension ${key}`}
              p={0}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default AscensionTabs;
