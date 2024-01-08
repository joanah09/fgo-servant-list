import { Text, Box, Flex } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";
import { StarIcon } from "@chakra-ui/icons";
import BasicInfo from "./BasicInfo";
import AttackHP from "./AttackHP";
import Traits from "./Traits";
import CommandCards from "./CommandCards";
import Skills from "./Skills";
import Stats from "./Stats";
import Profile from "./Profile";
import Coin from "./Coin";

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

      <Box mt={5}>
        <Flex flexWrap="wrap">
          <BasicInfo details={details} />
          <AttackHP details={details} />
        </Flex>

        <Stats details={details} />

        <Flex flexWrap="wrap" mt={5}>
          <Coin details={details} />
        </Flex>

        <Flex flexWrap="wrap" mt={5}>
          <Traits details={details} />
        </Flex>

        <Flex flexWrap="wrap" mt={5}>
          <CommandCards details={details} />
        </Flex>

        <Flex flexWrap="wrap" flexDirection="column" mt={5}>
          <Skills details={details} />
        </Flex>

        <Flex flexWrap="wrap" flexDirection="column" mt={5}>
          <Profile details={details} />
        </Flex>
      </Box>
    </>
  );
};

export default Details;
