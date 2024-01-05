import { Box, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";
import quick from "../../../assets/images/Quick.webp";
import arts from "../../../assets/images/Arts.webp";
import buster from "../../../assets/images/Buster.webp";

const Skills = ({ details }: { details: ServantDataDetailed }) => {
  const sortedSkills = details.skills.map((skill) => skill.num).sort();
  const sortedSkillsInfo = details.skills.slice().sort((a, b) => a.num - b.num);

  const cardImages: { [key: string]: string } = {
    quick,
    arts,
    buster,
  };
  return (
    <>
      <Box mt={3}>
        <Text as="b">Skills:</Text>

        {sortedSkills.length > 0 && (
          <Stack direction="column">
            {sortedSkillsInfo.map((skill) => (
              <Stack direction="row" gap={3} py={1} key={skill.id}>
                <Image
                  src={skill.icon}
                  boxSize={{ base: "70px", md: "70px", sm: "50px" }}
                />
                <Stack alignItems="flex-start" alignSelf="center" gap="1px">
                  <Text as="b" fontSize={{ base: "xs" }}>
                    {skill.name}
                  </Text>
                  <Text fontSize="xs">{skill.detail}</Text>
                </Stack>
              </Stack>
            ))}
          </Stack>
        )}
      </Box>

      <Box mt={5}>
        <Text as="b">Noble Phantasm:</Text>

        {details.noblePhantasms.map((noblePhantasm, index) => (
          <Stack direction="row" gap={3} py={1} key={index}>
            <Image
              src={cardImages[noblePhantasm.card.toLowerCase()]}
              alt={`${noblePhantasm.card} card`}
              boxSize={{ base: "70px", md: "70px", sm: "50px" }}
            />

            <Stack alignItems="flex-start" alignSelf="center" gap="1px">
              <Text as="b" fontSize={{ base: "xs", sm: "sm" }}>
                {noblePhantasm.name}
              </Text>
              <Text fontSize="xs">
                <span>Rank: </span>
                {noblePhantasm.rank}
              </Text>
              <Text fontSize="xs">
                <span>Type: </span>
                {noblePhantasm.type}
              </Text>
              <Text fontSize="xs">
                <span>Effect: </span>
                {noblePhantasm.detail}
              </Text>
            </Stack>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default Skills;
