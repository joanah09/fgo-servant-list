import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement />
      <Input
        borderRadius={20}
        placeholder="Search"
        variant="filled"
        isDisabled
      />
    </InputGroup>
  );
};

export default Search;
