import { Input, InputLeftElement, InputGroup, Stack, InputRightElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
const Searchbar = () => {
    const [searchClicked, setSearchClicked] = useState<boolean>(false);

    const toggleSearch = () => {
      setSearchClicked(true);
    };
  
    const handleBlur = () => {
      setSearchClicked(false);
    };
  return (
    <Stack className="w-[30%] " direction={"row"} align={"center"}  >
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        className={`${searchClicked ? "block":"hidden"}`}
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
      />
      <InputRightElement>
      <FiSearch />
      </InputRightElement>
    </InputGroup>

<div className="ml-[5%] bg-gray-100 p-2 rounded-[50%]">
<FaMicrophone  className="text-[20px]"/>
</div>  
  </Stack>
  )
}

export default Searchbar
