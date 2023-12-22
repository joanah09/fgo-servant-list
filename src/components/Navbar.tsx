import ColorModeSwitch from "./ColorSwitch";
import logo from "../assets/fgo-logo.png";
import { HStack, Image } from "@chakra-ui/react";
import Search from "./Search";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
