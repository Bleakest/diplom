import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  addBasketProductAsync,
  loadBasketData,
  loadProductAsync,
} from "../../store/actions";
import { selectBasket, selectProduct } from "../../store/selectors";
import { Loader } from "../../components/Loader";

export function Product() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(selectProduct);
  const basket = useSelector(selectBasket);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      dispatch(loadProductAsync(params.productId)),
      dispatch(loadBasketData()),
    ])
      .then(([productData, basketData]) => {
        setError(productData.error || basketData.error);
        if (productData.error) {
          navigate("/");
        }
      })
      .then(() => setIsLoading(false));
  }, [dispatch, params.productId]);

  function handleAddBtn() {
    const selectEl = document.querySelector("#select");
    const value = selectEl.value;

    if (value) {
      dispatch(addBasketProductAsync(product, value));
      setIsButtonDisabled(true);
      const doneEL = document.querySelector("#done");
      doneEL.classList.remove("hidden");
      setTimeout(() => {
        doneEL.classList.add("hidden");
        setIsButtonDisabled(false);
      }, 1500);
    } else {
      const errorEL = document.querySelector("#error");
      errorEL.classList.remove("hidden");
      setIsButtonDisabled(true);
      setTimeout(() => {
        errorEL.classList.add("hidden");
        setIsButtonDisabled(false);
      }, 1500);
    }
  }

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="h-screen pt-[80px]">
          <div
            id="error"
            className="hidden absolute h-[80px] w-full bg-red-200 text-center items-center"
          >
            <h1 className="relative pt-6 text-lg font-semibold">
              Выберите размер
            </h1>
          </div>
          <div
            id="done"
            className="hidden absolute h-[80px] w-full bg-green-200 text-center items-center"
          >
            <h1 className="relative pt-6 text-lg font-semibold">Добавлено</h1>
          </div>

          <div className="container mx-auto flex justify-around ">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <img src={product.image} width={400} alt="hoodie" />
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
                    disabled={isButtonDisabled}
                  >
                    Добавить в корзину
                  </button>
                  {basket.products.length ? (
                    <Link
                      to="/basket"
                      className="fixed border px-2 rounded-lg py-2 bg-zinc-800 text-white right-2 bottom-[100px]"
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
              </>
            )}
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}
