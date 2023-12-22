import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Servant = {
  rarity: number;
  className: string;
};

interface FilterProps {
  data: Servant[] | null;
  onSort: (filteredData: Servant[]) => void;
  onFilter: (filteredData: Servant[]) => void;
}

const Filter: React.FC<FilterProps> = ({ data, onSort }) => {
  const filterRarity = [
    { value: "5", label: "5" },
    { value: "4", label: "4" },
    { value: "3", label: "3" },
    { value: "2", label: "2" },
    { value: "1", label: "1" },
  ];

  const filterClass = [
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
    { value: "foreigner", label: "Foreigner" },
    { value: "pretender", label: "Pretender" },
    { value: "grandCaster", label: "Grand Caster" },
  ];

  const [selectedRarity, setSelectedRarity] = useState("5");
  const [selectedClass, setSelectedClass] = useState("saber");

  const handleFilterRarity = (selectedRarity: string) => {
    console.log(selectedRarity);
    if (data) {
      const filteredData = data.filter(
        (item) => item.rarity === parseInt(selectedRarity)
      );
      onSort(filteredData);
    }
  };

  const handleFilterClassName = (selectedClass: string) => {
    console.log(selectedClass);
    if (data) {
      const filteredData = data.filter(
        (item) => item.className === selectedClass
      );
      onSort(filteredData);
    }
  };

  useEffect(() => {
    handleFilterRarity(selectedRarity);
  }, [selectedRarity]);

  useEffect(() => {
    handleFilterClassName(selectedClass);
  }, [selectedClass]);

  return (
    <>
      <Menu>
        <MenuButton>Filter by Rarity</MenuButton>
        <MenuList>
          {filterRarity.map((rarity) => (
            <MenuItem
              key={rarity.value}
              onClick={() => setSelectedRarity(rarity.value)}
            >
              {rarity.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton>Filter by Class</MenuButton>
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
      </Menu>
    </>
  );
};

export default Filter;
