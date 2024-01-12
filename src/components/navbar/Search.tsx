import { useState } from "react";
import {
  Input,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ServantData, searchServants } from "../../hooks";

interface SearchProps {
  onSearchResults: (results: ServantData[]) => void;
}

const Search = ({ onSearchResults }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<ServantData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setError(null);
      if (searchValue.trim() === "") {
        setSearchResults([]);
        onSearchResults([]);
      } else {
        const results = await searchServants(searchValue);
        setSearchResults(results);
        onSearchResults(results);
      }
    } catch (error) {
      // console.error("Error fetching search results:", error);
      setError("No Servant found.");
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

      <Modal isOpen={!!error} onClose={() => setError(null)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{error}</ModalHeader>
          <ModalCloseButton mt={2} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
