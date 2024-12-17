import React, { useLayoutEffect } from "react";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../../selectors";
import { loadBasketData } from "../../actions";
import { Product } from "./components/Product";

export function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);

  useLayoutEffect(() => {
    dispatch(loadBasketData());
  }, []);

  return (
    <div className="pt-[80px]">
      <div className="container min-h-[600px] mx-auto">
        <h1 className="text-xl font-bold mt-6 ml-6 mb-6">Корзина</h1>
        <div className="flex ">
          <div className="flex flex-col w-full">
            {basket.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="w-[200px]  h-[400px] ml-4 border-2 flex flex-col justify-around">
            <h1 className="pl-4">Итого:</h1>
            <div className="flex justify-center">
              <button className="text-white bg-zinc-700 py-2 rounded-lg hover:bg-zinc-500 w-[100px]">
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
