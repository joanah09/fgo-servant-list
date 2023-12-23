import { StarIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface RarityFilterProps {
  filterRarity: { value: string; stars: number }[];
  selectedRarityDisplay: string;
  setSelectedRarity: (value: string) => void;
}

const ServantRarity = ({
  filterRarity,
  selectedRarityDisplay,
  setSelectedRarity,
}: RarityFilterProps) => {
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
        <MenuButton pr={1}>
          {selectedRarityDisplay ? (
            <>Filter by Rarity: </>
          ) : (
            <>
              Filter by Rarity: <Text as="i">Select Rarity </Text>
            </>
          )}
        </MenuButton>
        <MenuList>
          {filterRarity.map((rarity) => (
            <MenuItem
              key={rarity.value}
              onClick={() => setSelectedRarity(rarity.value)}
            >
              {[...Array(rarity.stars)].map((_, index) => (
                <StarIcon key={index} color="yellow.400" />
              ))}
            </MenuItem>
          ))}
        </MenuList>
        {selectedRarityDisplay && (
          <Box marginTop={-0.5}>
            {[...Array(parseInt(selectedRarityDisplay))].map((_, index) => (
              <StarIcon key={index} color="yellow.400" />
            ))}
          </Box>
        )}
      </Box>
    </Menu>
  );
};

export default ServantRarity;
