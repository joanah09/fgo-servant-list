import { Box, Flex, Grid, Tag, TagLabel, Text } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const Stats = ({ details }: { details: ServantDataDetailed }) => {
  return (
    <Box mt={3}>
      <Text>
        <b>Stats: </b>
      </Text>

      <Flex flexWrap="wrap">
        <Box flexBasis={{ base: "100%", md: "50%" }}>
          <Text>
            <b>Agility: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.agility}
            </Text>
          </Text>

          <Text>
            <b>Diety: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.deity}
            </Text>
          </Text>

          <Text>
            <b>Endurance: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.endurance}
            </Text>
          </Text>

          <Text>
            <b>Luck: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.luck}
            </Text>
          </Text>

          <Text>
            <b>Magic: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.magic}
            </Text>
          </Text>
        </Box>

        <Box flexBasis={{ base: "100%", md: "50%" }}>
          <Text>
            <b>Noble Phantasm: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.np}
            </Text>
          </Text>

          <Text>
            <b>Personality: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.personality}
            </Text>
          </Text>

          <Text>
            <b>Policy: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.policy}
            </Text>
          </Text>

          <Text>
            <b>Strength: </b>
            <Text textTransform="capitalize" as="span">
              {details.profile.stats.strength}
            </Text>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Stats;
