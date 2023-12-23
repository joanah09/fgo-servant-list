import { StarIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";

interface RarityFilterProps {
  filterRarity: { value: string; stars: number }[];
  selectedRarityDisplay: string;
  setSelectedRarity: (value: string) => void;
}

const RarityFilter = ({
  filterRarity,
  selectedRarityDisplay,
  setSelectedRarity,
}: RarityFilterProps) => {
  return (
    <Menu>
      <MenuButton>
        {selectedRarityDisplay ? (
          <>Filter by Rarity:</>
        ) : (
          <>Filter by Rarity: Select Rarity</>
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
        <Box marginTop={-1}>
          {[...Array(parseInt(selectedRarityDisplay))].map((_, index) => (
            <StarIcon key={index} color="yellow.400" />
          ))}
        </Box>
      )}
    </Menu>
  );
};

export default RarityFilter;
