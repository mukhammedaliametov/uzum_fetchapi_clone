import React from "react";
import Image from "../assets/hero_img.jpg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Hero = () => {
  return (
    <>
    <div className="mt-[30px]"></div>
      <Link
        href="#"
        className="container relative flex items-center cursor-pointer"
      >
        <img
          src={Image}
          alt="image"
          className="w-full rounded-[10px] h-[200px] md:h-[400px]"
        />
        <div className="absolute w-[87%] sm:w-[90%] lg:w-[95.5%] flex justify-between items-center mx-[15px]">
          <HiChevronLeft className="text-[35px] bg-[#ffffff59] rounded-full text-[#1F2026] cursor-pointer p-[5px]" />
          <HiChevronRight className="text-[35px] bg-[#ffffff59] rounded-full text-[#1F2026] cursor-pointer p-[5px]" />
        </div>
      </Link>
      <div className="mt-[30px]"></div>
      <Cards />
    </>
  );
};

export default Hero;
