import { Text, Image, Stack, Box, TagLabel, Tag, Flex } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks/useServants";
import { StarIcon } from "@chakra-ui/icons";
import quick from "../../../assets/images/Quick.webp";
import arts from "../../../assets/images/Arts.webp";
import buster from "../../../assets/images/Buster.webp";

interface ServantDetailsProps {
  details: ServantDataDetailed;
}

const ServantDetails = ({ details }: ServantDetailsProps) => {
  //Command Card Image
  const cardImages: { [key: string]: string } = {
    quick,
    arts,
    buster,
  };
  // Stars for rarity
  const renderStars = (numStars: number) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<StarIcon key={i} color="yellow.400" />);
    }
    return stars;
  };

  return (
    <>
      <Box>
        <Text fontSize="2xl" as="b">
          {details.name}
        </Text>
        <Text>{details.rarity && renderStars(details.rarity)}</Text>
      </Box>

      <Box mt={3}>
        <Flex flexWrap="wrap">
          {/* Basic Info */}
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
          {/* Atk & HP */}
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
        </Flex>
        {/* Traits */}
        <Flex flexWrap="wrap">
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
        </Flex>
        {/* Command Cards */}
        <Flex flexWrap="wrap">
          <Box mt={3}>
            <Text as="b">Command cards:</Text>
            <Stack direction="row">
              {details.cards.map((cardType, index) => (
                <Image
                  key={index}
                  src={cardImages[cardType]}
                  alt={`${cardType} card`}
                  boxSize={{ base: "50px", md: "100px", sm: "70px" }}
                />
              ))}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ServantDetails;
