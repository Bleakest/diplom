import React, { useEffect, useLayoutEffect, useState } from "react";
import bgImage from "../../assets/img/photo.jpg";
import SearchPanel from "../../components/SearchPanel";
import Footer from "../../components/footer";
import { Product, Category } from "./components";
import { request } from "../../utils";

export function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request("/products").then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="pt-[80px]">
      <div className="bg-zinc-700 w-full h-[350px] flex">
        <img src={bgImage} alt="bg-photo" className="w-full" />
      </div>
      <div className="container mx-auto">
        <SearchPanel />
        <Category />
        <div className="flex flex-wrap justify-around max-w-[1240px]">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
