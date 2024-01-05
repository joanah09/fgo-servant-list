import { Link } from "react-router-dom";
import { Card, Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ServantData, ServantDataDetailed } from "../../hooks";

interface ServantCardProps {
  servant: ServantData;
  onClick: () => void;
  detailedServantData: ServantDataDetailed[] | null;
}

const ServantCard = ({ servant }: ServantCardProps) => {
  const extraAssets = (servant as ServantDataDetailed)?.extraAssets;
  const ascensionImages = extraAssets?.faces.ascension || [];
  const displayImage = ascensionImages[1] || ascensionImages[0];

  return (
    <Link to={`/servant/${servant.id}`}>
      <Card borderRadius={2} overflow="hidden" cursor="pointer">
        <Flex alignItems="center">
          {displayImage && (
            <Image loading="lazy" boxSize="85px" src={displayImage} />
          )}
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
  );
};

export default ServantCard;
