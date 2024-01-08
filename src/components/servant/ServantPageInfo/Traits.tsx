import { Box, Tag, TagLabel, Text } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const Traits = ({ details }: { details: ServantDataDetailed }) => {
  return (
    <Box>
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
          <TagLabel textTransform="capitalize">
            {trait.name.replace(/(?<!^)([A-Z])/g, " $1")}
          </TagLabel>
        </Tag>
      ))}
    </Box>
  );
};

export default Traits;
