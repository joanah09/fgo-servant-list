import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { ServantDataDetailed } from "../../../hooks";

const Skills = ({ details }: { details: ServantDataDetailed }) => {
  const sortedSkills = details.skills.map((skill) => skill.num).sort();
  const sortedSkillsInfo = details.skills.slice().sort((a, b) => a.num - b.num);

  return (
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
                <Text as="b" fontSize={{ base: "xs", sm: "xs" }}>
                  {skill.name}
                </Text>
                <Text fontSize="xs">{skill.detail}</Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Skills;
