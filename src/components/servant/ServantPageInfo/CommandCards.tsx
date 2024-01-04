import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";
import quick from "../../../assets/images/Quick.webp";
import arts from "../../../assets/images/Arts.webp";
import buster from "../../../assets/images/Buster.webp";

const CommandCards = ({ details }: { details: ServantDataDetailed }) => {
  const cardImages: { [key: string]: string } = {
    quick,
    arts,
    buster,
  };
  return (
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
  );
};

export default CommandCards;
