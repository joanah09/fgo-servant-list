import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ServantContainer from "./components/servant/ServantContainer";
import { Box, GridItem, Heading } from "@chakra-ui/react";

const App = () => {
  const [sortedData, setSortedData] = useState<Servant[] | null>(null);

  const handleSort = (sortedServants: Servant[]) => {
    setSortedData(sortedServants);
  };

  return (
    <Box m={4}>
      <GridItem area="nav">
        <Navbar onSort={handleSort} />
      </GridItem>

      <GridItem area="main" m={4}>
        <Heading fontSize="3xl" marginBottom={3}>
          Servant List
        </Heading>
        <ServantContainer sortedData={sortedData} />
      </GridItem>
    </Box>
  );
};

export default App;
