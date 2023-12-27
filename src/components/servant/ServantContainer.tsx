import { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid, useColorMode } from "@chakra-ui/react";
import ServantList from "./ServantList";
import Filter from "../navbar/Filter";
import { useServants, ServantData } from "../../hooks/useServants";
import ServantSearchResult from "./ServantSearchResult";
import Navbar from "../navbar/Navbar";

const ServantContainer = () => {
  const [servants, setServants] = useState<ServantData[] | null>(null);
  const [filteredServants, setFilteredServants] = useState<
    ServantData[] | null
  >(null);
  const [searchResults, setSearchResults] = useState<ServantData[]>([]);

  const handleSort = (filteredData: ServantData[]) => {
    setFilteredServants(filteredData);
  };

  const handleSearchResults = (results: ServantData[]) => {
    setSearchResults(results);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servantsArray = await useServants();
        const flattenedServants = servantsArray.flat();
        setServants(flattenedServants);
      } catch (error) {
        console.error(`Error fetching data.`);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar onSearchResults={handleSearchResults} />

      <Box padding="10px">
        <Heading fontSize="3xl" my={4}>
          Servant List
        </Heading>
        {searchResults.length !== 0 ? (
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
            <ServantSearchResult servant={searchResults} />
          </SimpleGrid>
        ) : (
          <>
            <Box marginBottom={4}>
              <Filter data={servants} onSort={handleSort} />
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
              <ServantList data={filteredServants || servants} />
            </SimpleGrid>
          </>
        )}
      </Box>
    </>
  );
};

export default ServantContainer;
