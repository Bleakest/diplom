import React from "react";
import SearchPanel from "../../components/SearchPanel";
import product from "../../assets/img/maika1.jpg";
import Footer from "../../components/footer";

export function Basket() {
  return (
    <div className="pt-[80px]">
      <div className="container min-h-[600px] mx-auto">
        <SearchPanel />
        <h1 className="text-xl font-bold mt-6 ml-6 mb-6">Корзина</h1>
        <div className="flex justify-between">
          <div className="w-full">
            <div className="w-full flex h-[150px] border-2">
              <img
                className="p-2 ml-4"
                src={product}
                width={150}
                alt="product"
              />
              <div className="mt-4 ml-4 w-full ">
                <div className="flex justify-around mt-4">
                  <h1>Наименование</h1>
                  <h1>Количество</h1>
                  <h1>Стоимость</h1>
                </div>
              </div>
              <div className="mr-4 mt-2">&#x2717;</div>
            </div>
            <div className="w-full mt-4 flex h-[150px] border-2">
              <img
                className="p-2 ml-4"
                src={product}
                width={150}
                alt="product"
              />
              <div className="mt-4 ml-4 w-full ">
                <div className="flex justify-around mt-4">
                  <h1>Наименование</h1>
                  <h1>Количество</h1>
                  <h1>Стоимость</h1>
                </div>
              </div>
              <div className="mr-4 mt-2">&#x2717;</div>
            </div>
          </div>
          <div className="w-[200px] h-[400px] ml-4 border-2 flex flex-col justify-around">
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
