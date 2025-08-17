import React from 'react';
import Bts from '../assets/bts.svg';
import Procent from '../assets/procent.svg';
import School from '../assets/school.svg';
import NaskiyaFc from '../assets/nasiya_fc.svg';
import { FaChevronDown } from "react-icons/fa";

const Bottom = () => {
    return (
        <div className='container flex items-center justify-between gap-[10px] font-inter text-[14px]'>
            <div className='flex items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={Bts} alt="bts" />
                <span>Maktab bozori</span>
            </div>
            <div className='flex items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={Procent} alt="bts" />
                <span>Yangi Savdo</span>
            </div>
            <div className='flex items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={School} alt="bts" />
                <span>Kanselyariya</span>
            </div>
            <div className='flex items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={NaskiyaFc} alt="bts" />
                <span>Nasiya</span>
            </div>
            <a href="" className='hover:text-[#7000FF] cursor-pointer'>Elektronika</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer'>Maishiy texnika</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer'>Kiyim</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer'>Poyabzallar</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer'>Aksessuarlar</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer'>Goʻzallik va parvarish</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer'>Salomatlik</a>
            <a href="" className='flex items-center gap-[3px]'>Yana <FaChevronDown /></a>
        </div>
    );
};

export default Bottom;