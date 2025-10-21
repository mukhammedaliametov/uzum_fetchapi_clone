import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Flag from "../assets/flag.svg";

const TopHeader = () => {
  return (
    <div className="bg-[#F0F2F5]">
      <div className="container flex items-center justify-between text-[14px] font-inter font-medium">
        <div className="flex justify-between gap-[15px] items-center py-[8px]">
          <div className="flex items-center gap-[5px] cursor-pointer group">
            <CiLocationOn className="text-[20px] group-hover:text-[#7000FF] duration-300" />
            <p className="flex items-center gap-[10px] group-hover:text-[#7000FF] duration-300">
              <span className="hidden sm:block">Shahar:</span> <span className="underline">Toshkent</span>
            </p>
          </div>
          <div>
            <a href="#" className="hidden sm:block hover:text-[#7000FF] duration-300">Topshirish punktlari</a>
          </div>
        </div>
        <div className="flex items-center gap-[15px] text-[#4D4F59]">
          <a href="#" className="text-[#7000FF] hidden lg:block">Uzumda soting</a>
          <a href="#" className="hover:text-[#7000FF] duration-300 hidden lg:block">Savol-javoblar</a>
          <a href="#" className="hover:text-[#7000FF] duration-300 hidden lg:block">Buyurtmalarim</a>
          <div className="flex items-center gap-[5px] cursor-pointer text-black">
            <img src={Flag} alt="flag" />
            <p>O'zbekcha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
