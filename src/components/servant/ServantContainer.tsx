import { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ServantList from "./ServantList";
import Filter from "../navbar/Filter";
import { useServants, ServantData, ServantDataDetailed } from "../../hooks";
import ServantSearchResult from "./ServantSearchResult";
import Navbar from "../navbar/Navbar";
import { useServantAvatar } from "../../hooks/useServantAvatar";

const ServantContainer = () => {
  const [servants, setServants] = useState<ServantData[] | null>(null);
  const [servantDetail, setServantDetail] = useState<
    ServantDataDetailed[] | null
  >(null);
  const [filteredServants, setFilteredServants] = useState<
    ServantData[] | null
  >(null);
  const [searchResults, setSearchResults] = useState<ServantData[]>([]);
  const [servantId, setServantId] = useState<number | null>(null);

  const handleSort = (filteredData: ServantData[]) => {
    setFilteredServants(filteredData);
  };

  const handleSearchResults = (results: ServantData[]) => {
    setSearchResults(results);
  };

  const handleServantClick = async (id: number) => {
    try {
      setServantId(id);
      const detailedServantData = await useServants(id);
      setServantDetail(detailedServantData as ServantDataDetailed[]);
    } catch (error) {
      console.error(`Error fetching detailed servant data.`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!servants) {
          const servantsArray = await useServantAvatar();
          const flattenedServants = servantsArray.flat();
          setServants(flattenedServants);
        }

        if (servantDetail === null && servantId !== null) {
          // Fetch detailed servant data if servantId is provided
          const detailedServantData = await useServants(servantId);
          setServantDetail(detailedServantData as ServantDataDetailed[]);

          console.log(servantId, "servant ID");
        }
      } catch (error) {
        console.error(`Error fetching data.`);
      }
    };

    fetchData();
  }, [servants, servantDetail, servantId]);

  return (
    <>
      <Navbar onSearchResults={handleSearchResults} />

      <Box p={4} mx={4}>
        <Heading fontSize="3xl" py={4} pt={20}>
          Servant List
        </Heading>

        {searchResults.length !== 0 ? (
          <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing={4}>
            <ServantSearchResult
              servant={searchResults}
              onServantClick={handleServantClick}
              detailedServantData={servantDetail}
            />
          </SimpleGrid>
        ) : (
          <>
            <Box marginBottom={4}>
              <Filter servant={servants} onSort={handleSort} />
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
              <ServantList
                servant={filteredServants || servants}
                onServantClick={handleServantClick}
                detailedServantData={servantDetail}
              />
            </SimpleGrid>
          </>
        )}
      </Box>
    </>
  );
};

export default ServantContainer;
