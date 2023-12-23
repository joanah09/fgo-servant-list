import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">
        <MoonIcon />
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
