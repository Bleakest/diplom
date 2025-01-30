import React from "react";
import bgImage from "../../assets/img/photo.jpg";
import Footer from "../../components/Footer";
import { ProductsSection } from "./components/ProductsSection";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <div className="pt-[80px] mb-[100px]">
      <div>
        <div className="bg-zinc-700 w-full h-[350px] flex">
          <img src={bgImage} alt="bg-photo" className="w-full" />
        </div>
        <ProductsSection />
      </div>
      <Footer />
      <Link
        to="/basket"
        className="fixed border px-2 rounded-lg py-2 bg-zinc-800 text-white right-2 bottom-[100px]"
      >
        <div className="flex justify-between items-center w-[100px]">
          <i className="fa fa-shopping-basket" />
          <h1>В корзину</h1>
        </div>
      </Link>
    </div>
  );
}
