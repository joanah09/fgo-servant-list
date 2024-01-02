import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServants, ServantDataDetailed } from "../../hooks/useServants";
import {
  Box,
  Container,
  Flex,
  ResponsiveValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import ServantAscensionTabs from "./ServantPageInfo/ServantAscensionTabs";
import ServantDetails from "./ServantPageInfo/ServantDetails";

const ServantPage = () => {
  const { servantId } = useParams();
  const [servants, setServants] = useState<ServantDataDetailed[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailedServantData = await useServants(
          undefined,
          servantId ? parseInt(servantId, 10) : undefined
        );
        setServants(detailedServantData as ServantDataDetailed[]);
      } catch (error) {
        console.error("Servant data not found:", error);
      }
    };

    fetchData();
  }, [servantId]);

  const flexDirection = useBreakpointValue({
    base: "column",
    lg: "row",
  }) as ResponsiveValue<"column" | "row">;

  return (
    <Container maxW="1024px" border="1px" borderColor="gray.200" my={10} p={0}>
      {servants.map((servant) => (
        <Flex
          key={servant.id}
          direction={flexDirection}
          justify="center"
          gap={8}
        >
          <Box maxW={flexDirection === "column" ? "100%" : "420px"}>
            {servant.extraAssets &&
              servant.extraAssets.charaGraph &&
              servant.extraAssets.charaGraph.ascension && (
                <ServantAscensionTabs
                  ascensionImages={servant.extraAssets.charaGraph.ascension}
                />
              )}
          </Box>
          <Box mt={12}>
            <ServantDetails details={servant} />
          </Box>
        </Flex>
      ))}
    </Container>
  );
};

export default ServantPage;
