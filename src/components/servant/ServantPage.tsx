import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServants, ServantDataDetailed } from "../../hooks";
import {
  Box,
  Container,
  Flex,
  ResponsiveValue,
  Spinner,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import AscensionTabs from "./ServantPageInfo/AscensionTabs";
import Details from "./ServantPageInfo/Details";
import NavbarBasic from "../navbar/NavbarBasic";
import Costume from "./ServantPageInfo/Costume";
import { UseQueryResult } from "@tanstack/react-query";

const ServantPage = () => {
  const { servantId } = useParams();
  const [servants, setServants] = useState<ServantDataDetailed[]>([]);
  const { colorMode } = useColorMode();

  const {
    data: detailedServantData,
    isLoading,
    error: servantError,
  } = useServants(servantId) as UseQueryResult<ServantDataDetailed[], Error>;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setServants(detailedServantData || []);
      } catch (error) {
        console.error("Servant data not found:", error);
      }
    };
    fetchData();

    // forced top when clicked from ServantContainer
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  }, [detailedServantData, servantId]);

  const flexDirection = useBreakpointValue({
    base: "column",
    lg: "row",
  }) as ResponsiveValue<"column" | "row">;

  const flexDirectionImage = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "row",
    lg: "column",
  }) as ResponsiveValue<"column" | "row">;

  return (
    <>
      <NavbarBasic />

      <Box pt={10}>
        <Container maxW="1024px" mb={10} px={0} pt={20}>
          {isLoading ? (
            <Box textAlign="center" fontSize="xl">
              <Spinner color="red.500" /> Loading Servant data...
            </Box>
          ) : servantError ? (
            <Box textAlign="center" color="red.500" fontSize="xl">
              Error fetching servant data. Please try again later.
            </Box>
          ) : (
            servants.map((servant) => (
              <Flex
                key={servant.id}
                direction={flexDirection}
                justify="center"
                gap={3}
                border={{
                  base: "none",
                  lg: "1px",
                }}
                borderColor={{
                  base: "transparent",
                  lg: colorMode === "dark" ? "gray.700" : "gray.200",
                }}
                pb={10}
              >
                <Box
                  maxW={flexDirection === "column" ? "100%" : "420px"}
                  mx="auto"
                >
                  <Flex
                    direction={flexDirectionImage}
                    alignItems="flex-end"
                    gap={3}
                  >
                    {servant.extraAssets &&
                      servant.extraAssets.charaGraph &&
                      servant.extraAssets.charaGraph.ascension && (
                        <AscensionTabs
                          ascensionImages={
                            servant.extraAssets.charaGraph.ascension
                          }
                        />
                      )}

                    {servant.extraAssets &&
                      servant.extraAssets.charaGraph &&
                      servant.extraAssets.charaGraph.costume && (
                        <Costume
                          costume={servant.extraAssets.charaGraph.costume}
                        />
                      )}
                  </Flex>
                </Box>

                <Box mt={3} px={4}>
                  <Details details={servant} />
                </Box>
              </Flex>
            ))
          )}
        </Container>
      </Box>
    </>
  );
};

export default ServantPage;
