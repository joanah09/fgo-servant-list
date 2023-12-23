import { useState, useEffect } from "react";
import { HStack, SimpleGrid } from "@chakra-ui/react";
import ServantList from "./ServantList";
import Filter from "../navbar/Filter";
import useServants from "../../hooks/useServants";

export type Servant = {
  id: number;
  name: string;
  className: string;
  rarity: number;
  face: string;
};

const ServantContainer = () => {
  const [servants, setServants] = useState<Servant[] | null>(null);
  const [filteredServants, setFilteredServants] = useState<Servant[] | null>(
    null
  );

  const handleSort = (filteredData: Servant[]) => {
    setFilteredServants(filteredData);
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
      <HStack marginBottom={4}>
        <Filter data={servants} onSort={handleSort} />
      </HStack>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        <ServantList data={filteredServants || servants} />
      </SimpleGrid>
    </>
  );
};

export default ServantContainer;
