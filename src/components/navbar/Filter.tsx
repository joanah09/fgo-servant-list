import { useEffect, useState } from "react";
import ServantRarity from "../servant/ServantRarity";
import ServantClass from "../servant/ServantClass";
import { ServantData } from "../../hooks";
import { Wrap, WrapItem, useBreakpointValue } from "@chakra-ui/react";

interface FilterProps {
  servant: ServantData[] | null;
  onSort: (filteredData: ServantData[]) => void;
}

const Filter = ({ servant, onSort }: FilterProps) => {
  const filterRarity = [
    { value: "5", stars: 5 },
    { value: "4", stars: 4 },
    { value: "3", stars: 3 },
    { value: "2", stars: 2 },
    { value: "1", stars: 1 },
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
  ];

  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRarityDisplay, setSelectedRarityDisplay] = useState("");
  const [filteredData, setFilteredData] = useState<ServantData[] | null>(
    servant
  );
  const width = useBreakpointValue({ base: "100%", md: "auto" });

  const filterByRarity = (data: ServantData[], selectedRarity: string) => {
    return data.filter((item) => item.rarity === parseInt(selectedRarity));
  };

  const filterByClass = (data: ServantData[], selectedClass: string) => {
    return data.filter((item) => item.className === selectedClass);
  };

  const combineFilters = (
    data: ServantData[],
    selectedRarity: string,
    selectedClass: string
  ) => {
    let filteredData = data;

    if (selectedRarity !== "") {
      filteredData = filterByRarity(filteredData, selectedRarity);
    }

    if (selectedClass !== "") {
      filteredData = filterByClass(filteredData, selectedClass);
    }

    return filteredData;
  };

  const handleFilterRarity = (selectedRarity: string) => {
    if (servant) {
      const combinedFilter = combineFilters(
        servant,
        selectedRarity,
        selectedClass
      );
      onSort(combinedFilter);
      setSelectedRarityDisplay(selectedRarity);
      setFilteredData(combinedFilter);
    }
  };

  const handleFilterClassName = (selectedClass: string) => {
    if (servant) {
      const combinedFilter = combineFilters(
        servant,
        selectedRarity,
        selectedClass
      );
      onSort(combinedFilter);
      setFilteredData(combinedFilter);
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
      <Wrap spacing="10px" align="left">
        <WrapItem w={width}>
          <ServantRarity
            filterRarity={filterRarity}
            selectedRarityDisplay={selectedRarityDisplay}
            setSelectedRarity={setSelectedRarity}
          />
        </WrapItem>
        <WrapItem>
          <ServantClass
            filterClass={filterClass}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
          />
        </WrapItem>
      </Wrap>
    </>
  );
};

export default Filter;
