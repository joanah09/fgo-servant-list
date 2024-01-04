import { Text, Box, Flex } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks/useServants";
import { StarIcon } from "@chakra-ui/icons";
import BasicInfo from "./BasicInfo";
import AttackHP from "./AttackHP";
import Traits from "./Traits";
import CommandCards from "./CommandCards";
import Skills from "./Skills";

const Details = ({ details }: { details: ServantDataDetailed }) => {
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
          <BasicInfo details={details} />
          <AttackHP details={details} />
        </Flex>

        <Flex flexWrap="wrap">
          <Traits details={details} />
        </Flex>

        <Flex flexWrap="wrap">
          <CommandCards details={details} />
        </Flex>

        <Flex flexWrap="wrap" flexDirection="column">
          <Skills details={details} />
        </Flex>
      </Box>
    </>
  );
};

export default Details;
