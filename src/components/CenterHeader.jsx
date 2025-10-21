import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from '../assets/button.png';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import MiniLogo from '../assets/favicon.png';

const CenterHeader = () => {
    return (
        <div className='container flex items-center justify-between gap-[20px] font-inter'>
            <a href="#" className='py-[25px]'>
                <img src={Logo} alt="logo" className='block md:hidden lg:block' />
                <img src={MiniLogo} alt="mini-logo" className='hidden md:block lg:hidden' />
            </a>
            <div className='flex items-center gap-[20px]'>
                <a href="" className='hidden lg:block'>
                    <img src={Button} alt="button" />
                </a>
                <div className='hidden md:flex items-center gap-[6px] border border-[#36374033] rounded-[4px] w-[600px] overflow-hidden'>
                    <input type="text" placeholder='Mahsulotlar va turkumlar izlash' className='w-[100%] py-[10px] px-[20px] outline-none' />
                    <div className='bg-[#EDEFF2] h-[12.4vh] w-[90px] flex justify-center items-center cursor-pointer'>
                    <IoSearch className='text-[20px]' />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[20px] xl:gap-[30px]'>
                <div className='flex md:hidden items-center gap-[6px] hover:text-[#7000FF] cursor-pointer'>
                    <IoSearch className='text-[18px]' />
                </div>
                <div className='flex items-center gap-[6px] hover:text-[#7000FF] cursor-pointer'>
                    <FaRegUser />
                    <span className='hidden xl:block'>Kirish</span>
                </div>
                <div className='flex items-center gap-[6px] hover:text-[#7000FF] cursor-pointer'>
                    <FaRegHeart />
                    <span className='hidden xl:block'>Saralangan</span>
                </div>
                <div className='flex items-center gap-[6px] hover:text-[#7000FF] cursor-pointer'>
                    <LiaShoppingBagSolid className='text-[22px]' />
                    <span className='hidden xl:block'>Savat</span>
                </div>
            </div>
        </div>
    );
};

export default CenterHeader;