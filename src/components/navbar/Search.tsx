import { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useServants, ServantSort } from "../../hooks/useServants";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<ServantSort[]>([]);

  const handleSearch = async () => {
    try {
      const results = await useServants(searchValue);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  console.log(searchValue, searchResults);
  return (
    <>
      <InputGroup>
        <InputLeftElement />
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
