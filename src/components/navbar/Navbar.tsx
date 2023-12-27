import { HStack, Image, useColorMode } from "@chakra-ui/react";
import Search from "../navbar/Search";
import ColorModeSwitch from "../navbar/ColorSwitch";
import darkLogo from "../../assets/fgo-logo-white.png";
import lightLogo from "../../assets/fgo-logo.png";
import { useEffect, useState } from "react";

interface NavbarProps {
  onSearchResults: (results: any) => void;
}

const Navbar = ({ onSearchResults }: NavbarProps) => {
  const { colorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const logoSrc = colorMode === "dark" ? darkLogo : lightLogo;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <HStack
      as="header"
      position="fixed"
      w="100%"
      bg={colorMode === "dark" ? "gray.800" : "white"}
      zIndex="sticky"
      py={3}
      px={6}
      boxShadow={scrolled ? "0px 2px 6px rgba(0, 0, 0, 0.1)" : "none"}
      transition="box-shadow 0.1s ease-in-out"
    >
      <Image src={logoSrc} boxSize="50px" />
      <Search onSearchResults={onSearchResults} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
