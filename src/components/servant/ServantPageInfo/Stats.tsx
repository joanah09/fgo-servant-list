import { Box, Flex, Grid, Tag, TagLabel, Text } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const Stats = ({ details }: { details: ServantDataDetailed }) => {
  console.log(details.profile.stats.agility);
  return (
    <Box mt={3}>
      <Text>
        <b>Stats: </b>
      </Text>

      <Grid flexWrap="wrap">
        <Text fontSize="sm">
          <b>Agility: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.agility}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Diety: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.deity}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Endurance: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.endurance}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Endurance: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.endurance}
          </Text>
        </Text>
      </Grid>

      <Grid flexWrap="wrap">
        <Text fontSize="sm">
          <b>Luck: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.luck}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Magic: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.magic}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Noble Phantasm: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.np}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Personality: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.personality}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Policy: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.policy}
          </Text>
        </Text>

        <Text fontSize="sm">
          <b>Strength: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.stats.strength}
          </Text>
        </Text>
      </Grid>
    </Box>
  );
};

export default Stats;
