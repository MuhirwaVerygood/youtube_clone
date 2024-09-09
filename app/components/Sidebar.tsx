import { GoHomeFill } from "react-icons/go";
import React from "react";
import { Link } from "@chakra-ui/react";
import { SlLike } from "react-icons/sl";
import { MdSubscriptions } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { GoVideo } from "react-icons/go";
import { LuListVideo } from "react-icons/lu";
import { RxScissors } from "react-icons/rx";
import { VscHistory } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";


import { CiClock2 } from "react-icons/ci";
interface SideListArray {
  name: string;
  url: string;
  icon: React.ElementType;
}

const Sidebar = () => {
  const sideListArray: SideListArray[] = [
    {
      name: "Home",
      url: "/",
      icon: GoHomeFill,
    },
    {
      name: "Shorts",
      url: "/shorts",
      icon: GoHomeFill,
    },
    {
      name: "Subscriptions",
      url: "/subscriptions",
      icon: MdSubscriptions,
    },
  ];


  const secondCategoryArray : SideListArray[]= [
    {
      name: "Your channel",
      url:"/channel",
    icon: MdSubscriptions
    },
    {
      name: "History",
      url:"/history",
    icon: VscHistory
    },
    {
      name: "Playlists",
      url:"/playlists",
    icon: LuListVideo
    },
    {
      name: "Your Videos",
      url:"/videos",
    icon: GoVideo
    },
    {
      name: "Watch later",
      url:"/watch-later",
    icon: CiClock2
    },
   
    {
      name: "Liked Videos",
      url:"/liked-videos",
    icon: SlLike
    },
    {
      name: "Downloads",
      url:"/downloads",
    icon: LiaDownloadSolid
    },
    {
      name: "Your Clips",
      url:"/clips",
    icon: RxScissors
    },
  ]
  return (
    <div className="w-[200px]   h-full pl-[1%]">
      <div className="h-[calc(100vh-50px)] overflow-auto sidebar pt-[10%]">
        <div className="list-none leading-loose  w-[80%]">
          {sideListArray.map((l) => (
            <div key={l.name} >
             <Link _hover={{"textDecoration":"none"}} href={l.url} className="flex items-center leading-[2.4]  pl-[5%] rounded-md  hover:bg-gray-100" >
                  <p>
                    <l.icon /> 
                  </p>
                  <span className="ml-[10%]">{l.name}</span>
                </Link>
            </div>
          ))}
        </div>
        <hr  className="mt-[4%]"/>

<div className="pl-[5%] mt-[10%] w-[80%] bg-gray-400 rounded-md py-2 ">
  <Link  _hover={{textDecoration: "none"}} className=" w-full flex flex-row items-center">
  <span>You </span>
  <IoIosArrowForward className="ml-[4%]" />
  </Link>
</div>

        <div className="list-none leading-loose  w-[80%]">
          {secondCategoryArray.map((l) => (
            <div key={l.name} >
             <Link _hover={{"textDecoration":"none"}} href={l.url} className="flex items-center leading-[2.4]  pl-[5%] rounded-md  hover:bg-gray-100" >
                  <p>
                    <l.icon /> 
                  </p>
                  <span className="ml-[10%]">{l.name}</span>
                </Link>
            </div>
          ))}
        </div>
        <hr className="mt-[4%]"/>
      </div>
    </div>
  );
};

export default Sidebar;


