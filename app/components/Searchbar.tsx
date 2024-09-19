import { Input, InputLeftElement, InputGroup, Stack, InputRightElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { fetchAllData } from '../../utils/fetchData';
const Searchbar = ({ onSearchResults }: { onSearchResults: (results: any[]) => void }) => {
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const toggleSearch = () => {
    setSearchClicked(true);
  };

  const handleBlur = () => {
    setSearchClicked(false);
  };

  const handleSearch = async () => {
    const results = await fetchAllData(query);
    onSearchResults(results || []);
  };

  return (
    <Stack direction={"row"} justifyContent={"flex-end"}>
      <InputGroup w={"70%"}>
        <InputLeftElement
          pointerEvents="none"
          className={`${searchClicked ? "block" : "hidden"}`}
        >
          <FiSearch color="gray.300" />
        </InputLeftElement>
        <Input
          focusBorderColor="blue.500"
          rounded={"20px"}
          className="w-full"
          onFocus={toggleSearch}
          onBlur={handleBlur}
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <InputRightElement>
          <FiSearch />
        </InputRightElement>
      </InputGroup>

      <div className="ml-[2%] bg-gray-100 p-2 rounded-[50%]">
        <FaMicrophone className="text-[20px]" />
      </div>
    </Stack>
  );
}

export default Searchbar;
