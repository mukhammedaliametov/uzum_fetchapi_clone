import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import TopLoadingBar from "./components/TopLoadingBar";
import Category from "./components/Category";

const App = () => {
   const [visit, setVisit] = useState(true);
   useEffect(() => {
    setTimeout(() => {
      setVisit(false);
    }, 1200)
   })
  return (
    <>
      {visit ? (
        <TopLoadingBar />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Hero />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/category" element={<Category />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
