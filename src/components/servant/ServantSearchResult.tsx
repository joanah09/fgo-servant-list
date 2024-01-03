import { Link } from "react-router-dom";
import { Card, Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ServantData, ServantDataDetailed } from "../../hooks/useServants";

interface ServantCardProps {
  servant: ServantData[];
  onServantClick: (id: number) => void;
  detailedServantData: ServantDataDetailed[] | null;
}

const ServantSearchResult = ({ servant, onServantClick }: ServantCardProps) => {
  const handleServantClick = (id: number) => {
    onServantClick(id);
  };
  return (
    <>
      {servant.map((servant) => (
        <Link to={`/servant/${servant.id}`} key={servant.id}>
          <Card
            borderRadius={2}
            overflow="hidden"
            onClick={() => handleServantClick(servant.id)}
          >
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
        </Link>
      ))}
    </>
  );
};

export default ServantSearchResult;
