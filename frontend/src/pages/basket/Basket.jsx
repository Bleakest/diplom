import React, { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../../store/selectors";
import { loadBasketData } from "../../store/actions";
import { Product } from "./components/Product";
import { removeBasketItemAsync } from "../../store/actions";

export function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handleDelete(id) {
    const deleteEl = document.querySelector("#delete");
    deleteEl.classList.remove("hidden");
    setIsButtonDisabled(true);
    dispatch(removeBasketItemAsync(id));
    setTimeout(() => {
      setIsButtonDisabled(false);
      deleteEl.classList.add("hidden");
    }, 1000);
  }
  const totalCost = basket.products.reduce((acc, item) => acc + item.cost, 0);

  useEffect(() => {
    dispatch(loadBasketData());
  }, [dispatch]);

  return (
    <div className="pt-[80px] mb-[120px]">
      <div
        id="delete"
        className="hidden fixed h-[80px] w-full bg-red-200 text-center items-center"
      >
        <h1 className="relative pt-6 text-lg font-semibold">Товар Удален</h1>
      </div>
      <div className="container min-h-[600px] mx-auto">
        <h1 className="text-xl font-bold mt-6 ml-6 mb-6">Корзина</h1>
        <div className="flex ">
          <div className="flex flex-col w-full">
            {basket.products.length ? (
              basket.products.map((product) => (
                <Product
                  handleDelete={handleDelete}
                  isButtonDisabled={isButtonDisabled}
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="text-center font-bold mt-52 text-2xl">
                В корзине пусто
              </div>
            )}
          </div>

          <div className="w-[200px] right-10 h-[400px] ml-4 border-2 flex flex-col justify-around">
            <div className="flex">
              <h1 className="pl-4 ">Итого:</h1>
              <p className="pl-2 font-bold">{totalCost}</p>
            </div>
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
