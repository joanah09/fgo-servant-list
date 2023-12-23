import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface ClassFilterProps {
  filterClass: { value: string; label: string }[];
  selectedClass: string;
  setSelectedClass: (value: string) => void;
}

const ServantClass = ({
  filterClass,
  selectedClass,
  setSelectedClass,
}: ClassFilterProps) => {
  return (
    <Menu>
      <Box
        display="flex"
        borderWidth="1px"
        borderRadius="8px"
        px={3}
        py={1}
        _hover={{ bg: "gray.400" }}
      >
        <MenuButton pr={2}>
          {selectedClass ? (
            <>Filter by Class: </>
          ) : (
            <>
              Filter by Class: <Text as="i">Select Class</Text>
            </>
          )}
        </MenuButton>
        <MenuList>
          {filterClass.map((className) => (
            <MenuItem
              key={className.value}
              onClick={() => setSelectedClass(className.value)}
            >
              {className.label}
            </MenuItem>
          ))}
        </MenuList>
        {selectedClass && (
          <Text as="b">
            {filterClass.find((c) => c.value === selectedClass)?.label || ""}
          </Text>
        )}
      </Box>
    </Menu>
  );
};

export default ServantClass;
