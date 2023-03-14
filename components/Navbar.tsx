import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrMicrophone } from "react-icons/gr";
import { TfiUpload } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="px-4 flex justify-between items-center">
      <div className="flex items-center">
        <button>{<RxHamburgerMenu />}</button>
        <Link
          href={"/"}
          className="flex items-center px-[18px] pt-[14px] pb-4 font-bold"
        >
          <AiFillYoutube className="text-2xl fill-red-500" />
          <p className="m-0">YouTube Clone</p>
        </Link>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          className="border h-10 border-gray-700 rounded-l-full pl-4 pr-1 w-[540px] bg-gray-900 text-gray-500"
          placeholder="Search"
        />
        <button className="bg-gray-700 h-10 w-16 rounded-r-full flex items-center justify-center">
          <BsSearch />
        </button>
        <div className="bg-gray-800 p-3 rounded-full text-white ml-2">
          <GrMicrophone className="" />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <TfiUpload className="w-5 h-5" />
        <IoMdNotificationsOutline className="w-5 h-5" />
        <p className=" bg-green-300 rounded-full m-0 w-10 h-10 flex justify-center items-center">
          M
        </p>
      </div>
    </div>
  );
};

export default Navbar;
