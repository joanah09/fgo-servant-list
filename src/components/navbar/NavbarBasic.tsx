import { HStack, Image, useColorMode, Text } from "@chakra-ui/react";
import ColorModeSwitch from "../navbar/ColorSwitch";
import darkLogo from "../../assets/fgo-logo-white.png";
import lightLogo from "../../assets/fgo-logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavbarBasic = () => {
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
      justifyContent="space-between"
      py={3}
      px={6}
      boxShadow={scrolled ? "0px 2px 6px rgba(0, 0, 0, 0.1)" : "none"}
      transition="box-shadow 0.1s ease-in-out"
    >
      <Link to={`/`}>
        <Image src={logoSrc} boxSize="50px" />
      </Link>

      <Link to={`/`}>
        <Text as="u">Back to Servant List</Text>
      </Link>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavbarBasic;
