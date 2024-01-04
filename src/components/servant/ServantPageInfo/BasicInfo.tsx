import { Box, Text } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const BasicInfo = ({ details }: { details: ServantDataDetailed }) => {
  return (
    <Box flexBasis={{ base: "100%", md: "50%" }} mb={{ base: 4, md: 0 }}>
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
      <Text>
        <b>Cost: </b>
        <Text textTransform="capitalize" as="span">
          {details.cost}
        </Text>
      </Text>
    </Box>
  );
};

export default BasicInfo;
