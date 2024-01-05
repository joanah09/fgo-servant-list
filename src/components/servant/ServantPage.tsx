import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServants, ServantDataDetailed } from "../../hooks";
import {
  Box,
  Container,
  Flex,
  ResponsiveValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import AscensionTabs from "./ServantPageInfo/AscensionTabs";
import Details from "./ServantPageInfo/Details";
import NavbarBasic from "../navbar/NavbarBasic";
import Costume from "./ServantPageInfo/Costume";

const ServantPage = () => {
  const { servantId } = useParams();
  const [servants, setServants] = useState<ServantDataDetailed[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailedServantData = await useServants(
          undefined,
          servantId ? parseInt(servantId) : undefined
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
    sm: "row",
  }) as ResponsiveValue<"column" | "row">;

  return (
    <>
      <NavbarBasic />
      <Box>
        <Container maxW="1024px" mb={10} px={0} pt={20}>
          {servants.map((servant) => (
            <Flex
              key={servant.id}
              direction={flexDirection}
              justify="center"
              gap={3}
              border="1px"
              borderColor="gray.200"
              pb={10}
            >
              <Box maxW={flexDirection === "column" ? "100%" : "420px"}>
                {servant.extraAssets &&
                  servant.extraAssets.charaGraph &&
                  servant.extraAssets.charaGraph.ascension && (
                    <AscensionTabs
                      ascensionImages={servant.extraAssets.charaGraph.ascension}
                    />
                  )}

                {servant.extraAssets &&
                  servant.extraAssets.charaGraph &&
                  servant.extraAssets.charaGraph.costume && (
                    <Costume costume={servant.extraAssets.charaGraph.costume} />
                  )}
              </Box>

              <Box mt={3} px={4}>
                <Details details={servant} />
              </Box>
            </Flex>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default ServantPage;
