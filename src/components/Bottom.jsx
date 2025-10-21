import React from 'react';
import Bts from '../assets/bts.svg';
import Procent from '../assets/procent.svg';
import School from '../assets/school.svg';
import NaskiyaFc from '../assets/nasiya_fc.svg';
import { FaChevronDown } from "react-icons/fa";

const Bottom = () => {
    return (
        <div className='container flex items-center overflow-x-scroll xl:overflow-x-visible justify-between gap-[10px] font-inter text-[14px]'>
            <div className='flex flex-shrink-0 items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={Bts} alt="bts" />
                <span>Maktab bozori</span>
            </div>
            <div className='flex flex-shrink-0 items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={Procent} alt="bts" />
                <span>Yangi Savdo</span>
            </div>
            <div className='flex flex-shrink-0 items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={School} alt="bts" />
                <span>Kanselyariya</span>
            </div>
            <div className='flex flex-shrink-0 items-center gap-[10px] hover:text-[#7000FF] cursor-pointer'>
                <img src={NaskiyaFc} alt="bts" />
                <span>Nasiya</span>
            </div>
            <a href="" className='hover:text-[#7000FF] cursor-pointer flex-shrink-0'>Elektronika</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer flex-shrink-0'>Maishiy texnika</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer flex-shrink-0'>Kiyim</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer flex-shrink-0'>Poyabzallar</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer flex-shrink-0'>Aksessuarlar</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer flex-shrink-0'>Goʻzallik va parvarish</a>
            <a href="" className='hover:text-[#7000FF] cursor-pointer flex-shrink-0'>Salomatlik</a>
            <a href="" className='flex items-center gap-[3px]'>Yana <FaChevronDown /></a>
        </div>
    );
};

export default Bottom;