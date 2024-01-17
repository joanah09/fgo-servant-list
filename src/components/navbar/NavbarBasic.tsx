import { HStack, Image, useColorMode, Text } from "@chakra-ui/react";
import ColorModeSwitch from "../navbar/ColorSwitch";
import darkLogo from "../../assets/fgo-logo-white.png";
import lightLogo from "../../assets/fgo-logo.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarBasic = () => {
  const { colorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const logoSrc = colorMode === "dark" ? darkLogo : lightLogo;
  const navigate = useNavigate();

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

  useEffect(() => {
    // Save scroll position
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollPosition", String(window.scrollY));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Restore scroll position
    const savedScrollPosition = localStorage.getItem("scrollPosition");

    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <HStack
      as="header"
      position="fixed"
      w="100%"
      bg={colorMode === "dark" ? "gray.800" : "white"}
      borderBottom="1px"
      borderColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      zIndex="sticky"
      justifyContent="space-between"
      py={3}
      px={6}
      boxShadow={scrolled ? "0px 2px 6px rgba(0, 0, 0, 0.1)" : "none"}
      transition="box-shadow 0.1s ease-in-out"
    >
      <Link to={`/`} onClick={handleBackClick}>
        <Image src={logoSrc} boxSize="50px" />
      </Link>

      <Link to={`/`} onClick={handleBackClick}>
        <Text as="u">Back to Servant List</Text>
      </Link>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavbarBasic;
