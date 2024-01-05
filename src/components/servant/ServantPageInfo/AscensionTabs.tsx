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
  const ascenionKey = Object.keys(ascensionImages);
  return (
    <Tabs
      defaultIndex={0}
      position="relative"
      variant="line"
      colorScheme="gray"
      mx={0}
      maxW="350px"
      minW="320px"
      bg={colorMode === "dark" ? "gray.700" : "gray.200"}
    >
      <Center h="50px" bg={colorMode === "dark" ? "gray.600" : "gray.300"}>
        <Text color={colorMode === "dark" ? "white" : "black"}>
          Ascension Stage
        </Text>
      </Center>
      <TabList w="100%">
        {ascenionKey.length > 1 &&
          ascenionKey.map((key, index) => (
            <Tab key={key} py={2} minW={`${100 / ascenionKey.length}%`}>
              {index + 1}
            </Tab>
          ))}
      </TabList>
      <TabPanels mx={0}>
        {ascenionKey.length <= 1 ? (
          <TabPanel key={ascenionKey[0]} p={0}>
            <Image
              boxSize="100%"
              fit="cover"
              src={
                ascenionKey.length === 1 ? ascensionImages[ascenionKey[0]] : ""
              }
              alt={`Ascension ${ascenionKey[0]}`}
              p={0}
            />
          </TabPanel>
        ) : (
          // Render TabPanels for multiple images
          ascenionKey.map((key) => (
            <TabPanel key={key} p={0}>
              <Image
                boxSize="100%"
                fit="cover"
                src={ascensionImages[key]}
                alt={`Ascension ${key}`}
                p={0}
              />
            </TabPanel>
          ))
        )}
      </TabPanels>
    </Tabs>
  );
};

export default AscensionTabs;
