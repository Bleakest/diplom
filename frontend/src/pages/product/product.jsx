import React, { useEffect, useLayoutEffect, useState } from "react";
import image from "../../assets/img/hoodie1.jpg";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RESET_PRODUCT_DATA, loadProductAsync } from "../../actions";
import { selectProduct } from "../../selectors";

export function Product() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(selectProduct);
  console.log(params.productId);

  useLayoutEffect(() => {
    dispatch(RESET_PRODUCT_DATA);
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadProductAsync(params.productId)).then((productData) => {
      setError(productData.error);
      setIsLoading(false);
    });
  }, [dispatch, params.productId]);

  if (isLoading) {
    return null;
  }

  console.log(product);

  return (
    <>
      {" "}
      {error ? (
        <div>{error}</div>
      ) : (
        <div className=" h-screen pt-[80px]">
          <div className="container mx-auto flex justify-around pt-10">
            <img src={product.image} width={500} alt="hoodie" />
            <div className="w-[350px] items-center">
              <h1 className="font-bold text-xl mt-4">Product Name</h1>
              <div className="pt-2">Цена: 5500p.</div>
              <div className="mt-2">
                <h1 className="font-bold text-xl">Количество:</h1>
                <div>5</div>
              </div>
              <div className="pt-4">
                <h1 className="mb-2 font-bold">Размер:</h1>
                <select
                  className="px-2 py-2 bg-zinc-200 rounded-lg"
                  name="size"
                  id="product-size"
                >
                  <option value="">Выберите размер</option>
                  <option value="XL">XL</option>
                  <option value="L">L</option>
                  <option value="M">M</option>
                </select>
              </div>
              <button className="mt-6 text-white bg-zinc-700 px-8 py-2 rounded-lg hover:bg-zinc-500">
                купить
              </button>
              <div className="mt-6">
                <h1>Описание:</h1>
                <p className="mt-2 font-bold">
                  Худи выполнено из 100% хлопка, плотность материала 340гр/м2.
                  Оверсайз крой. Отправка в течении 10-12 рабочих дней.
                </p>
                <div className="mt-2">
                  <h1>Рекомендации по уходу и стирке:</h1>
                  <p className="mt-2 font-bold">
                    стирка при 30 градусах с расстёгнутой молнией и кофтой
                    вывернутой на изнанку.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
