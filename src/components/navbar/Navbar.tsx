import { HStack, Image, useColorMode } from "@chakra-ui/react";
import Search from "../navbar/Search";
import ColorModeSwitch from "../navbar/ColorSwitch";
import darkLogo from "../../assets/fgo-logo-white.png";
import lightLogo from "../../assets/fgo-logo.png";

interface NavbarProps {
  onSearchResults: (results: any) => void;
}

const Navbar = ({ onSearchResults }: NavbarProps) => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === "dark" ? darkLogo : lightLogo;

  return (
    <HStack>
      <Image src={logoSrc} boxSize="50px" />
      <Search onSearchResults={onSearchResults} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
