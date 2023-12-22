import React from "react";
import {
  Card,
  CardBody,
  Box,
  Flex,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

type Servant = {
  face: string;
  name: string;
  rarity: number;
  className: string;
};

interface ServantCardProps {
  servant: Servant;
}

const ServantCard: React.FC<ServantCardProps> = ({ servant }) => {
  return (
    <Card borderRadius={2} overflow="hidden">
      <CardBody>
        <Flex alignItems="center">
          <Image src={servant.face} alt={servant.name} />
          <Box marginLeft={4}>
            {[...Array(servant.rarity)].map((_, starIndex) => (
              <StarIcon key={starIndex} color="yellow.400" />
            ))}
            <Heading fontSize="1xl">{servant.name}</Heading>
            <Text textStyle="p">{servant.className}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ServantCard;
