import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import addBag from "../assets/add_bag.svg";
import { GoHeart } from "react-icons/go";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedCat, setSelectedCat] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCats = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCats);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const filteredProducts = products.filter((item) => {
    const uzs = item.price * 12115;

    if (selectedCat !== "all" && item.category !== selectedCat) return false;

    if (minPrice && uzs < Number(minPrice)) return false;
    if (maxPrice && uzs > Number(maxPrice)) return false;

    if (minRating && item.rating.rate < Number(minRating)) return false;

    return true;
  });

  return (
    <div className="container font-inter">
      <p className="mt-[15px] text-[14px] text-[#7E818C]">
        <Link to={"/"} className="text-black">
          Asosiy
        </Link>{" "}
        / Barcha toifalar{" "}
      </p>
      <div className="flex flex-col md:flex-row items-start gap-[40px]">
        <div className="mt-[14px]">
          <p className="text-[18px] font-semibold text-[#1F2026]">Toifalar</p>
          <div className="text-[#1F2026] inline-flex flex-col">
            <ul className="mt-[5px] inline-flex flex-col gap-[5px]">
              <li
                onClick={() => setSelectedCat("all")}
                className="capitalize py-[5px] px-[12px] rounded-[4px] hover:bg-[#E6E8ED] inline-block cursor-pointer"
              >
                Barcha toifalar
              </li>
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCat(cat)}
                  className="capitalize py-[5px] px-[12px] rounded-[4px] hover:bg-[#E6E8ED] inline-block cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[14px]">
            <p className="text-[18px] font-semibold text-[#1F2026]">
              Narxi, summasi
            </p>
            <div className="flex items-center gap-[10px] mt-[5px]">
              <input
                type="number"
                placeholder="5000 dan"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border outline-none rounded-[5px] text-[14px] border-[#36374033] py-[10px] px-[10px] w-[120px]"
              />
              <input
                type="number"
                placeholder="5000000 gacha"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border outline-none rounded-[5px] text-[14px] border-[#36374033] py-[10px] px-[10px] w-[120px]"
              />
            </div>
          </div>
          <div className="mt-[14px]">
            <p className="text-[18px] font-semibold text-[#1F2026]">
              Reyting bo'yicha
            </p>
            <input
              type="number"
              placeholder="3.5"
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="border outline-none rounded-[5px] mt-[5px] text-[14px] border-[#36374033] py-[10px] px-[10px] w-[120px]"
            />
          </div>
        </div>
        <div>
          <h2 className="text-[24px] font-bold text-[#1F2026] flex items-center gap-[6px] capitalize">
            {selectedCat === "all" ? "Barcha toifalar" : selectedCat}
            <HiOutlineChevronRight />
          </h2>
          <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {filteredProducts.map((item, index) => {
              const uzs = item.price * 12115;
              return (
                <Link
                  to={"javascript:void(0)"}
                  key={index}
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
                    {item.title.slice(0, 52)}
                    {item.title.length > 50 ? "..." : null}
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
                      <p className="text-[#1F2026]">
                        {Math.round(uzs).toLocaleString()} so'm
                      </p>
                    </div>
                    <div className="border border-[#36374033] p-[6px] rounded-full cursor-pointer">
                      <img src={addBag} alt="add_bag" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
