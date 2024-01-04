import { Box, Tag, TagLabel, Text } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const Traits = ({ details }: { details: ServantDataDetailed }) => {
  return (
    <Box mt={3}>
      <Text>
        <b>Traits: </b>
      </Text>
      {details.traits.map((trait) => (
        <Tag
          borderRadius="full"
          variant="solid"
          colorScheme="red"
          m={1}
          key={trait.id}
        >
          <TagLabel textTransform="capitalize">{trait.name}</TagLabel>
        </Tag>
      ))}
    </Box>
  );
};

export default Traits;
