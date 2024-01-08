import { ServantDataDetailed } from "../../../hooks";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

const Profile = ({ details }: { details: ServantDataDetailed }) => {
  return (
    <Box>
      <Text mb={3}>
        <b>Character Info: </b>
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple>
        {details.profile.comments.map((comment, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton px={0}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as="b" fontSize="sm">
                    Profile {index + 1}
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} px={0}>
              <Text whiteSpace="pre-line" fontSize="sm">
                {comment.comment}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Profile;
