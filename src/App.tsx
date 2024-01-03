import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServantContainer from "./components/servant/ServantContainer";
import ServantPage from "./components/servant/ServantPage";
import { Box, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Router>
      <Box mb={4}>
        <GridItem area="main">
          <Routes>
            <Route path="/servant/:servantId" element={<ServantPage />} />
            <Route path="/servants/" element={<ServantContainer />} />
          </Routes>
        </GridItem>
      </Box>
    </Router>
  );
};

export default App;
