import { useEffect, useState } from "react";
import RarityFilter from "../servant/ServantRarity";
import ClassFilter from "../servant/ServantClass";

type ServantSort = {
  rarity: number;
  className: string;
};

interface FilterProps {
  data: ServantSort[] | null;
  onSort: (filteredData: ServantSort[]) => void;
}

const Filter = ({ data, onSort }: FilterProps) => {
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
    { value: "grandCaster", label: "Grand Caster" },
  ];

  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRarityDisplay, setSelectedRarityDisplay] = useState("");
  const [filteredData, setFilteredData] = useState<ServantSort[] | null>(data);

  const filterByRarity = (data: ServantSort[], selectedRarity: string) => {
    return data.filter((item) => item.rarity === parseInt(selectedRarity));
  };

  const filterByClass = (data: ServantSort[], selectedClass: string) => {
    return data.filter((item) => item.className === selectedClass);
  };

  const combineFilters = (
    data: ServantSort[],
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
    if (data) {
      const combinedFilter = combineFilters(
        data,
        selectedRarity,
        selectedClass
      );
      onSort(combinedFilter);
      setSelectedRarityDisplay(selectedRarity);
      setFilteredData(combinedFilter);
    }
  };

  const handleFilterClassName = (selectedClass: string) => {
    if (data) {
      const combinedFilter = combineFilters(
        data,
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
      <RarityFilter
        filterRarity={filterRarity}
        selectedRarityDisplay={selectedRarityDisplay}
        setSelectedRarity={setSelectedRarity}
      />

      <ClassFilter
        filterClass={filterClass}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
    </>
  );
};

export default Filter;
