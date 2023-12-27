import ServantContainer from "./components/servant/ServantContainer";
import { Box, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Box mb={4}>
      <GridItem area="main">
        <ServantContainer />
      </GridItem>
    </Box>
  );
};

export default App;
