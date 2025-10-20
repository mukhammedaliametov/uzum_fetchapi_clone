import React from 'react';
import Image from '../assets/hero_img.jpg';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";


const Hero = () => {
    return (
        <a href='#' className='container relative flex items-center cursor-pointer'>
            <img src={Image} alt="image" className='w-full rounded-[10px]' />
            <div className='absolute w-[95.5%] flex justify-between items-center mx-[15px]'><HiChevronLeft className='text-[35px] bg-[#ffffff59] rounded-full text-[#1F2026] cursor-pointer p-[5px]' /><HiChevronRight className='text-[35px] bg-[#ffffff59] rounded-full text-[#1F2026] cursor-pointer p-[5px]' /></div>
        </a>
    );
};

export default Hero;