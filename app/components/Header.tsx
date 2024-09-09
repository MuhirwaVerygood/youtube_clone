"use client";

import { BsYoutube } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import Searchbar from "./Searchbar";

const Header = () => {


  return (
    <div className="w-full h-[50px] pl-[1%] z-10 flex items-center justify-between">
      <div className="flex justify-round items-center">
        <div>
          <IoMdMenu className="text-[30px] text-gray-300" />
        </div>
        <div className="flex sm:ml-[10%] items-center pr-[2%]">
          <BsYoutube className="text-red-700 text-[23px]" />
          <span className="text-[20px] tracking-tighter font-roboto font-bold">
            YouTube
          </span>
        </div>
      </div>

<Searchbar />

      <div className="flex text-[30px] w-[10%] justify-between pr-5">
        <BiVideoPlus />
        <IoMdNotificationsOutline />
        <RxAvatar />
      </div>
    </div>
  );
};

export default Header;
