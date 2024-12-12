import React, { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  RESET_PRODUCT_DATA,
  addBasketProductAsync,
  loadBasketData,
  loadProductAsync,
} from "../../actions";
import { selectBasket, selectProduct } from "../../selectors";

export function Product() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(selectProduct);
  const basket = useSelector(selectBasket);

  useLayoutEffect(() => {
    dispatch(RESET_PRODUCT_DATA);
  }, [dispatch]);

  useEffect(() => {
    Promise.all([
      dispatch(loadProductAsync(params.productId)),
      dispatch(loadBasketData()),
    ]).then(([productData, basketData]) => {
      setError(productData.error || basketData.error);
      setIsLoading(false);
    });
  }, [dispatch, params.productId]);

  if (isLoading) {
    return null;
  }

  function handleAddBtn() {
    const selectEl = document.querySelector("#select");
    const value = selectEl.value;

    if (value) {
      dispatch(addBasketProductAsync(product, value));
    }
  }

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className=" h-screen pt-[80px]">
          <div className="container mx-auto flex justify-around pt-10">
            <img src={product.image} width={500} alt="hoodie" />
            <div className="w-[350px] items-center">
              <h1 className="font-bold text-xl mt-4"> {product.title}</h1>
              <div className="pt-2">Цена: {product.cost}</div>

              <div className="pt-4">
                <h1 className="mb-2 font-bold">Размер:</h1>
                <select
                  className="px-2 py-2 bg-zinc-200 rounded-lg"
                  name="size"
                  id="select"
                >
                  <option value="">Выберите размер</option>
                  <option value="XL">XL</option>
                  <option value="L">L</option>
                  <option value="M">M</option>
                </select>
              </div>
              <button
                onClick={() => handleAddBtn()}
                className="mt-6 text-white bg-zinc-700 px-8 py-2 rounded-lg hover:bg-zinc-500"
              >
                Добавить в корзину
              </button>
              {basket.products.length ? (
                <Link
                  to="/basket"
                  className="fixed border px-2 rounded-lg py-2 bg-zinc-800 text-white right-2 bottom-2"
                >
                  <div className="flex justify-between items-center w-[100px]">
                    <i className="fa fa-shopping-basket" />
                    <h1>В корзину</h1>
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}
