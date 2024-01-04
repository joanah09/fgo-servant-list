import { Box, Text } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const AttackHP = ({ details }: { details: ServantDataDetailed }) => {
  return (
    <Box flexBasis={{ base: "100%", md: "50%" }}>
      <Text>
        <b>Max Level: </b>
        <Text textTransform="capitalize" as="span">
          {details.lvMax}
        </Text>
      </Text>
      <Text>
        <b>Base Attack: </b>
        <Text textTransform="capitalize" as="span">
          {details.atkBase}
        </Text>
      </Text>
      <Text>
        <b>Max Attack: </b>
        <Text textTransform="capitalize" as="span">
          {details.atkMax}
        </Text>
      </Text>
      <Text>
        <b>Base HP: </b>
        <Text textTransform="capitalize" as="span">
          {details.hpBase}
        </Text>
      </Text>
      <Text>
        <b>Max HP: </b>
        <Text textTransform="capitalize" as="span">
          {details.hpMax}
        </Text>
      </Text>
    </Box>
  );
};

export default AttackHP;
