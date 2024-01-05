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

const Costume = ({ costume }: { costume: Record<string, string> }) => {
  const { colorMode } = useColorMode();
  const costumeImage = Object.keys(costume);

  return (
    <Tabs
      defaultIndex={0}
      position="relative"
      variant="line"
      colorScheme="red"
      mt={5}
      mx={0}
      bg={colorMode === "dark" ? "gray.700" : "gray.100"}
    >
      <Center h="50px" bg={colorMode === "dark" ? "red.700" : "red.400"}>
        <Text color={colorMode === "dark" ? "white" : "black"}>Costume</Text>
      </Center>
      <TabList w="100%">
        {costumeImage.length > 1 &&
          costumeImage.map((key, index) => (
            <Tab key={key} py={2} minW={`${100 / costumeImage.length}%`}>
              {index + 1}
            </Tab>
          ))}
      </TabList>
      <TabPanels mx={0}>
        {costumeImage.length <= 1 ? (
          <TabPanel key={costumeImage[0]} p={0}>
            <Image
              boxSize="100%"
              maxW="350px"
              minW="320px"
              fit="cover"
              src={costumeImage.length === 1 ? costume[costumeImage[0]] : ""}
              alt={`Ascension ${costumeImage[0]}`}
              p={0}
            />
          </TabPanel>
        ) : (
          // Render TabPanels for multiple images
          costumeImage.map((key) => (
            <TabPanel key={key} p={0}>
              <Image
                boxSize="100%"
                maxW="350px"
                minW="320px"
                fit="cover"
                src={costume[key]}
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

export default Costume;
