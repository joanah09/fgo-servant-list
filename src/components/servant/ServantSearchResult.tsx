import { Card, Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ServantData } from "../../hooks/useServants";

interface ServantCardProps {
  servant: ServantData[];
}

const ServantSearchResult = ({ servant }: ServantCardProps) => (
  <>
    {servant.map((servant) => (
      <Card borderRadius={2} overflow="hidden" key={servant.id}>
        <Flex alignItems="center">
          <Image boxSize="85px" src={servant.face} alt={servant.name} />
          <Box marginLeft={4}>
            {[...Array(servant.rarity)].map((_, starIndex) => (
              <StarIcon key={starIndex} color="yellow.400" />
            ))}
            <Heading fontSize="1xl">{servant.name}</Heading>
            <Text textStyle="p">{servant.className}</Text>
          </Box>
        </Flex>
      </Card>
    ))}
  </>
);

export default ServantSearchResult;
