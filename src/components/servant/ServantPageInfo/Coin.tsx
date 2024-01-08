import { Box, Text, Image, Stack } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const Coin = ({ details }: { details: ServantDataDetailed }) => {
  const coin = details.coin.item;

  return (
    <Box>
      <Stack direction="row" gap={3} py={2}>
        <Image
          src={coin.icon}
          boxSize={{ base: "70px", md: "70px", sm: "50px" }}
        />
        <Stack alignItems="flex-start" alignSelf="center" gap="1px">
          <Text as="b" fontSize="sm">
            {coin.name}
          </Text>
          <Text whiteSpace="pre-line" fontSize="sm">
            {coin.detail}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Coin;
