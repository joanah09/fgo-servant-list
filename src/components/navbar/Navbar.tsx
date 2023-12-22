import { HStack, Image, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorSwitch";
import darkLogo from "../../assets/fgo-logo-white.png";
import lightLogo from "../../assets/fgo-logo.png";
import Search from "./Search";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === "dark" ? darkLogo : lightLogo;

  return (
    <HStack padding="10px">
      <Image src={logoSrc} boxSize="50px" />
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
