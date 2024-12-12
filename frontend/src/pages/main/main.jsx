import React, { useEffect, useLayoutEffect } from "react";
import bgImage from "../../assets/img/photo.jpg";
import SearchPanel from "../../components/SearchPanel";
import Footer from "../../components/footer";
import { Product, Category } from "./components";
import { request } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setProductsData } from "../../actions";
import { selectProducts } from "../../selectors";

export function Main() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useLayoutEffect(() => {
    request("/products").then((data) => dispatch(setProductsData(data.products)));
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
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
