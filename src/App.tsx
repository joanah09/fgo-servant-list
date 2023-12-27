import Navbar from "./components/navbar/Navbar";
import ServantContainer from "./components/servant/ServantContainer";
import { Box, GridItem, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <Box m={4}>
      <GridItem area="main" m={4}>
        <ServantContainer />
      </GridItem>
    </Box>
  );
};

export default App;
