import React, { useEffect, useState } from "react";
import TestCard from "../assets/test_card.png";
import { IoIosStar } from "react-icons/io";
import addBag from "../assets/add_bag.svg";
import { GoHeart } from "react-icons/go";
import { HiOutlineChevronRight } from "react-icons/hi";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error:", err));
  }, []);
  
  return (
    <div className="container font-inter">
      <h2 className="text-[24px] md:text-[30px] font-bold text-[#1F2026] flex items-center gap-[10px]">
        Katta savdo <HiOutlineChevronRight />
      </h2>
      <div className="grid grid-cols-1 gap-[20px] md:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {products.map((item) => {
            const uzs = item.price * 12115
          return (
            <a
              href="#"
              key={item.id}
              className="w-full flex flex-col justify-between pb-[5px] md:w-[232px] my-[20px] rounded-[10px] overflow-hidden group hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <div className="bg-[#eee] absolute w-full top-0 left-0 h-full -z-20"></div>
                <img
                  src={item.image}
                  alt="test_card"
                  className="w-full -z-10 scale-80 group-hover:scale-83 duration-500 transition-all h-full md:h-[300px]"
                />
                <GoHeart className="absolute top-[10px] right-[10px] text-[30px] p-[6px] bg-white rounded-full cursor-pointer" />
                <p className="absolute bottom-0 bg-[#FF3090] text-white text-[12px] px-[7px] py-[2px] rounded-full m-[5px]">
                  Aksiya
                </p>
              </div>
              <h3 className="text-[14px] text-[#1F2026] mt-[10px] px-[5px]">
                {item.title.slice(0, 52)}{item.title.length > 50 ? '...' : null}
              </h3>
              <span className="flex items-center gap-[6px] text-[14px] text-[#7E818C] mt-[5px] px-[5px]">
                <IoIosStar className="text-yellow-300 text-[16px]" />{" "}
                {item.rating.rate} ({item.rating.count} sharhlar)
              </span>
              <div className="px-[5px]">
                <p className="inline mt-[5px] py-[3px] px-[6px] bg-[#FFFF00] rounded-md text-[14px]">
                 {Math.round(uzs / 12).toLocaleString()} so'm/oyiga
              </p>
              </div>
              <div className="mt-[40px] flex items-center justify-between px-[5px]">
                <div>
                  <p className="text-[14px] text-[#7E818C] line-through">
                    {Math.round(uzs * 1.3).toLocaleString()} 
                  </p>
                  <p className="text-[#1F2026]">{Math.round(uzs).toLocaleString()} so'm</p>
                </div>
                <div className="border border-[#36374033] p-[6px] rounded-full cursor-pointer">
                  <img src={addBag} alt="add_bag" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
