import React from 'react';
import Appstore from '../assets/app_store.webp';
import Googleplay from '../assets/google_play.png';
import Instagram from '../assets/instagram.svg';
import Telegram from '../assets/telegram.svg';
import Facebook from '../assets/facebook.svg';
import YouTube from '../assets/youtube.svg';

const Footer = () => {
    return (
        <div className='container font-inter'>
            <div className='grid grid-cols-2 gap-[20px] xl:flex items-top justify-between'>
                <div className='flex flex-col gap-[12px]'>
                    <p className='font-semibold text-[16px]'>Biz haqimizda</p>
                    <a href="#" className='text-[14px] text-[#8B8E99] hover:text-[#000]'>Topshirish Punkitlari</a>
                    <a href="#" className='text-[14px] text-[#8B8E99] hover:text-[#000]'>Vakansiyalar</a>
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <p className='font-semibold text-[16px]'>Foydalanuvchilarga</p>
                    <a href="#" className='text-[14px] text-[#8B8E99] hover:text-[#000]'>Biz bilan bog'lanish</a>
                    <a href="#" className='text-[14px] text-[#8B8E99] hover:text-[#000]'>Savol-Javob</a>
                </div>
                <div className='flex flex-col gap-[12px]'>
                    <p className='font-semibold text-[16px]'>Tadbirkorlarga</p>
                    <a href="#" className='text-[14px] text-[#8B8E99] hover:text-[#000]'>Topshirish punkiti ochish</a>
                    <a href="#" className='text-[14px] text-[#8B8E99] hover:text-[#000]'>Sotuvchi kabinetiga kirish</a>
                </div>
                <div>
                    <p className='font-semibold text-[16px]'>Ilovadan yuklab olish</p>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-[10px] md:gap-[20px] mt-[20px]'>
                        <a href="#" className='flex items-center gap-[10px]'><img src={Appstore} alt="appstore" width='30px' /> AppStore</a>
                    <a href="#" className='flex items-center gap-[10px]'><img src={Googleplay} alt="googleplay" width='30px' /> Google Play</a>
                    </div>
                </div>
            </div>
            <div className='flex items-end justify-start md:justify-end my-[30px] md:my-[50px]'>
                <div>
                    <p className='font-semibold text-[16px] mb-[10px]'>Uzum ijtimoiy tarmoqlarda</p>
                    <div className='flex items-center gap-[10px]'>
                        <a href="#"><img src={Telegram} alt="telegram" /></a>
                    <a href="#"><img src={Instagram} alt="instagram" /></a>
                    <a href="#"><img src={Facebook} alt="facebook" /></a>
                    <a href="#"><img src={YouTube} alt="youtube" /></a>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between py-[15px] border-t border-[#7e818c77]'>
                <div className='hidden md:flex items-center gap-[20px]'> 
                    <a href='#' className='text-[#8B8E99] text-[14px]'>Maxfiylik kelishuvi</a>
                    <a href='#' className='text-[#8B8E99] text-[14px]'>Foydalanuvchi kelishuvi</a>
                </div>
                <div>
                    <p className='text-[#7E818C] text-[14px]'>«2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;