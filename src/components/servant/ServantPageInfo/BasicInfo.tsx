import { Box, Text } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const BasicInfo = ({ details }: { details: ServantDataDetailed }) => {
  return (
    <>
      <Box flexBasis={{ base: "100%", md: "50%" }}>
        <Text>
          <b>Voice Actor: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.cv}
          </Text>
        </Text>
        <Text>
          <b>Illustrator: </b>
          <Text textTransform="capitalize" as="span">
            {details.profile.illustrator}
          </Text>
        </Text>
        <Text>
          <b>ID: </b>
          <Text textTransform="capitalize" as="span">
            {details.collectionNo}
          </Text>
        </Text>
        <Text>
          <b>Class: </b>
          <Text textTransform="capitalize" as="span">
            {details.className}
          </Text>
        </Text>
        <Text>
          <b>Gender: </b>
          <Text textTransform="capitalize" as="span">
            {details.gender}
          </Text>
        </Text>
        <Text>
          <b>Attribute: </b>
          <Text textTransform="capitalize" as="span">
            {details.attribute}
          </Text>
        </Text>
      </Box>

      <Box flexBasis={{ base: "100%", md: "50%" }}>
        <Text>
          <b>Cost: </b>
          <Text textTransform="capitalize" as="span">
            {details.cost}
          </Text>
        </Text>
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
    </>
  );
};

export default BasicInfo;
