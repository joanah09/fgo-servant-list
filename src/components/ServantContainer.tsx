import { SimpleGrid } from "@chakra-ui/react";
import ServantList from "./ServantList";

const ServantContainer = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
      <ServantList />
    </SimpleGrid>
  );
};

export default ServantContainer;
