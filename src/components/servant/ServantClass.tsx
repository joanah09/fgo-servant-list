import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

interface ClassFilterProps {
  filterClass: { value: string; label: string }[];
  selectedClass: string;
  setSelectedClass: (value: string) => void;
}

const ClassFilter = ({
  filterClass,
  selectedClass,
  setSelectedClass,
}: ClassFilterProps) => {
  return (
    <Menu>
      <MenuButton>
        {selectedClass ? (
          <>Filter by Class:</>
        ) : (
          <>Filter by Class: Select Class</>
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
        <b>{filterClass.find((c) => c.value === selectedClass)?.label || ""}</b>
      )}
    </Menu>
  );
};

export default ClassFilter;
