import Searchbar from "./Searchbar";
import { Box, HStack, VStack } from "@chakra-ui/react";
import HeaderLeftCorner from "./HeaderLeftCorner";
import { useState } from "react";

const Header = () => {
  const headerSuggestionLinks = [
    "All", "Music", "Live", "News", "Choirs", "Contemporary Worship Music",
    "Mixes", "Phrases", "AI", "Computer Programming", "Presentations", "Comedy",
    "Recently Uploaded", "Watched", "New to you"
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const tabsBox = e.currentTarget.querySelector<HTMLElement>(".tabs-box");
    if (isDragging && tabsBox) {
      tabsBox.scrollLeft -= e.movementX;
      setIsScrolled(tabsBox.scrollLeft > 0);
      setIsEndReached(tabsBox.scrollLeft + tabsBox.clientWidth >= tabsBox.scrollWidth);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleIconClick = (direction: "left" | "right") => {
    const tabsBox = document.querySelector<HTMLElement>(".tabs-box");
    if (tabsBox) {
      if (direction === "left") {
        tabsBox.scrollLeft -= 350;
      } else if (direction === "right") {
        tabsBox.scrollLeft += 350;
      }
      setIsScrolled(tabsBox.scrollLeft > 0);
      setIsEndReached(tabsBox.scrollLeft + tabsBox.clientWidth >= tabsBox.scrollWidth);
    }
  };



  const handleListClick = ()=>{

  }
  return (
    <VStack direction={"column"} >
      <HStack className="w-full h-[50px] pl-[1%] z-10">
        <Box className="w-[60%]">
          <Searchbar />
        </Box>
        <HeaderLeftCorner />
      </HStack>
      <HStack
        className="h-[50px] wrapper relative pl-[1%] w-[95%]"
        overflowX={"hidden"}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {isScrolled && (
          <div className="icon absolute cursor-pointer left-0 flex h-full items-center bg-gradient-to-r from-white via-white to-transparent">
            <svg
              className="w-[35px] h-[35px] bg-gray-100 shadow-lg align-middle ml-[15px] rounded-[50%]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={() => handleIconClick("left")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        )}
        <ul className="tabs-box flex flex-row list-none items-center gap-3 overflow-x-auto no-scrollbar">
          {headerSuggestionLinks.map((lis, index) => (
            <li
              key={index}
              onClick={handleListClick}
              className=" border-[1px] py-1 cursor-pointer tab text-[1.18rem] bg-gray-100 hover:bg-gray-200 active:bg-black focus:bg-black rounded-[10px] px-5 whitespace-nowrap"
            >
              {lis}
            </li>
          ))}
        </ul>
        {!isEndReached && (
          <div className="icon absolute cursor-pointer h-full pl-[3%] right-0 flex items-center bg-gradient-to-l from-white via-white to-transparent">
            <svg
              className="mr-[15px] h-[35px] w-[35px] align-middle bg-gray-100 shadow-md rounded-[50%]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={() => handleIconClick("right")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        )}
      </HStack>
    </VStack>
  );
};

export default Header;
