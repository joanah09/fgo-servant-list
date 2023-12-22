import Navbar from "./components/navbar/Navbar";
import ServantContainer from "./components/servant/ServantContainer";
import ServantList from "./components/servant/ServantList";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <Box m={4}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>

      <GridItem area="main" m={4}>
        <Heading fontSize="3xl" marginBottom={3}>
          Servant List
        </Heading>
        <ServantContainer />
      </GridItem>
    </Box>
  );
};

export default App;
