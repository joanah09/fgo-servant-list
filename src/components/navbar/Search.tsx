import { useState } from "react";
import { Input, InputGroup } from "@chakra-ui/react";
import { useServants, ServantData } from "../../hooks";

interface SearchProps {
  onSearchResults: (results: ServantData[]) => void;
}

const Search = ({ onSearchResults }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<ServantData[]>([]);

  const handleSearch = async () => {
    try {
      if (searchValue.trim() === "") {
        setSearchResults([]);
        onSearchResults([]);
      } else {
        const results = await useServants(searchValue);
        setSearchResults(results);
        onSearchResults(results);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <InputGroup>
        <Input
          borderRadius={20}
          placeholder="Search"
          variant="filled"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </InputGroup>
    </>
  );
};

export default Search;
