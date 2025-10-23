import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaAngleRight, FaCheck } from "react-icons/fa6";
import { BsBagCheck } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dollarRate = 12115;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("Xatolik:", err));
  }, [id]);

  console.log(product);

  return !product ? (
    <div>Yuklanmoqda...</div>
  ) : (
    <div className="container font-inter">
      <div className="flex items-center overflow-x-scroll md:overflow-x-visible gap-[6px] text-[14px]">
        <Link
          to="/"
          className="my-[15px] text-[15px] font-semibold flex items-center flex-shrink-0"
        >
          Bosh sahifa
        </Link>
        <FaAngleRight />
        <span className="flex-shrink-0">{`${product.category[0].toUpperCase()}${product.category.slice(
          1
        )}`}</span>
        <FaAngleRight />
        <span className="flex-shrink-0">{`${product.title}`}</span>
      </div>
      <div>
        <h3 className="text-[20px]/[26px] md:text-[30px]/[36px] font-semibold w-full md:w-[550px]">
          {product.title}
        </h3>
        <div className="flex flex-col lg:flex-row justify-between xl:justify-start items-start gap-[40px]">
          <div className="">
            <span className="flex items-center gap-[6px] text-[14px] text-[#7E818C] mt-[5px] px-[5px]">
              <IoIosStar className="text-yellow-300 text-[16px]" />{" "}
              {product.rating.rate} ({product.rating.count} sharhlar)
            </span>
            <div className="relative w-full md:w-[400px] mt-[10px] rounded-[10px] overflow-hidden group">
              <div className="bg-[#eee] absolute w-full top-0 left-0 h-full -z-20"></div>
              <Link to={product.image} target="_blank">
                <img
                  src={product.image}
                  alt="test_card"
                  className="w-full -z-10 scale-80 group-hover:scale-83 duration-500 transition-all"
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block w-[400px]">
            <p className="py-[8px] px-[20px] rounded-full bg-[#00000033] inline-block mt-[20px] mb-[10px]">Mahsulot haqida</p>
        <p className="text-[16px]/[24px]">{`${product.description[0].toUpperCase()}${product.description.slice(
          1
        )}`}</p>
          </div>
          <div className="w-full md:w-[400px] border border-[#0000004b] p-[20px] rounded-[20px]">
            <p className="py-[2px] px-[6px] rounded-full bg-[#7000FF] text-white text-[12px] inline-block">-1% Uzum karta bilan</p>
            <h2 className="text-[30px] text-[#7000FF] font-semibold mt-[10px]">{Math.round(product.price * dollarRate).toLocaleString()} so'm</h2>
            <p className="mb-[8px]">Uzum kartasiz {Math.round(product.price * dollarRate + 1000).toLocaleString()} so`m <span className="line-through opacity-60">{Math.round(product.price * dollarRate * 1.3).toLocaleString()}</span></p>
            <p className="inline py-[3px] px-[6px] bg-[#FFFF00] rounded-md text-[14px]">
                {Math.round(product.price * dollarRate / 12).toLocaleString()} so'm/oyiga 
            </p><span className="text-[14px] ml-1">x 12 oy</span>
            <div className="flex items-center gap-[10px]">
                <button className="h-[55px] px-[50px] text-center bg-[#7000FF] text-white rounded-[10px] border-none cursor-pointer mt-[15px]">Savatga qo'shish</button>
                <div className="h-[55px] px-[20px] text-[26px] text-center flex items-center justify-center bg-[#00000031] rounded-[10px] mt-[15px] cursor-pointer">
                    <GoHeart />
                </div>
            </div>
            <div className="flex flex-col gap-[12px] mt-[18px]">
                <div className="flex items-center gap-[10px]">
                    <div className="bg-[#06fa9da9] text-[#000] py-[8px] px-[8px] rounded-[10px]">
                    <FaCheck />
                    </div>
                    <p className="text-[#00000098]">{product.rating.count + 926} dona xarid qilish mumkin</p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <div className="bg-[#faf606a9] text-[#000] py-[8px] px-[8px] rounded-[10px]">
                    <BsBagCheck />
                    </div>
                    <p className="text-[#00000098]">Bu haftada {product.rating.count + 256} kishi sotib oldi</p>
                </div>
            </div>
          </div>
        </div>
            <div className="block lg:hidden w-full">
            <p className="py-[8px] px-[20px] rounded-full bg-[#00000033] inline-block mt-[20px] mb-[10px]">Mahsulot haqida</p>
        <p className="text-[16px]/[24px]">{`${product.description[0].toUpperCase()}${product.description.slice(
          1
        )}`}</p>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
