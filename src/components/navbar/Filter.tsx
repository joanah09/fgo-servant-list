import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Servant = {
  rarity: number;
  className: string;
};

interface FilterProps {
  data: Servant[] | null;
  onSort: (sortedData: Servant[]) => void;
  onFilter: (filteredData: Servant[]) => void;
}

const Filter: React.FC<FilterProps> = ({ data, onSort }) => {
  const sortRarity = [
    { value: "5", label: "5" },
    { value: "4", label: "4" },
    { value: "3", label: "3" },
    { value: "2", label: "2" },
    { value: "1", label: "1" },
  ];

  const sortClassName = [
    { value: "saber", label: "Saber" },
    { value: "archer", label: "Archer" },
    { value: "lancer", label: "Lancer" },
    { value: "rider", label: "Rider" },
    { value: "caster", label: "Caster" },
    { value: "assassin", label: "Assassin" },
    { value: "berserker", label: "Berserker" },
    { value: "ruler", label: "Ruler" },
    { value: "alterEgo", label: "Alter Ego" },
    { value: "avenger", label: "Avenger" },
    { value: "demonGodPillar", label: "Demon God Pillar" },
    { value: "foreigner", label: "Foreigner" },
    { value: "pretender", label: "Pretender" },
    { value: "grandCaster", label: "Grand Caster" },
  ];

  const [selectedRarity, setSelectedRarity] = useState("5");
  const [selectedClassName, setSelectedClassName] = useState("saber");

  const handleSortByRarity = (selectedRarity: string) => {
    console.log("Sorting by rarity:", selectedRarity);
    if (data) {
      const sortedData = data.filter(
        (item) => item.rarity === parseInt(selectedRarity)
      );
      onSort(sortedData);
    }
  };

  const handleSortByClassName = (selectedClassName: string) => {
    if (data) {
      const sortedData = data.filter(
        (item) => item.className === selectedClassName
      );
      onSort(sortedData);
    }
  };

  useEffect(() => {
    handleSortByRarity(selectedRarity);
  }, [selectedRarity]);

  useEffect(() => {
    handleSortByClassName(selectedClassName);
  }, [selectedClassName]);

  return (
    <>
      <Menu>
        <MenuButton>Filter by Rarity</MenuButton>
        <MenuList>
          {sortRarity.map((rarity) => (
            <MenuItem
              key={rarity.value}
              onClick={() => handleSortByRarity(rarity.value)}
            >
              {rarity.value}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton>Filter by Class Name</MenuButton>
        <MenuList>
          {sortClassName.map((className) => (
            <MenuItem
              key={className.value}
              onClick={() => setSelectedClassName(className.value)}
            >
              {className.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default Filter;
