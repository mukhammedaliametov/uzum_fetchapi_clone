import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from '../assets/button.png';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import BasketIcon from '../assets/basket.svg';

const CenterHeader = () => {
    const [lan, setLan] = useState(0);
    return (
        <div className='container flex items-center justify-between gap-[20px] font-inter'>
            <a href="#" className='py-[25px]'>
                <img src={Logo} alt="logo" />
            </a>
            <div className='flex items-center gap-[20px]'>
                <a href="">
                    <img src={Button} alt="button" />
                </a>
                <div className='flex items-center gap-[6px] border border-[#36374033] rounded-[4px] w-[600px]'>
                    <input type="text" placeholder='Mahsulotlar va turkumlar izlash' className='w-[100%] py-[10px] px-[20px] outline-none' />
                    <div className='bg-[#EDEFF2] h-[7vh] w-[90px] flex justify-center items-center cursor-pointer'>
                    <IoSearch className='text-[20px]' />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[30px]'>
                <div className='flex items-center gap-[6px] hover:text-[#7000FF] cursor-pointer'>
                    <FaRegUser />
                    <span>Kirish</span>
                </div>
                <div className='flex items-center gap-[6px] hover:text-[#7000FF] cursor-pointer'>
                    <FaRegHeart />
                    <span>Kirish</span>
                </div>
                <div className='flex items-center gap-[6px] hover:text-[#7000FF] cursor-pointer'>
                    <img src={BasketIcon} alt="basket_icon" />
                    <span>Kirish</span>
                </div>
            </div>
        </div>
    );
};

export default CenterHeader;