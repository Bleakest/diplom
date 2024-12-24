import React, { useLayoutEffect, useState } from "react";
import { Product } from "./components/product";
import { request } from "../../utils";
import { addProduct, setProductsData } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, SelectUserRole } from "../../selectors";
import { Loader } from "../../components/loader";
import { useNavigate } from "react-router-dom";

export function Panel() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [isLoading, setIsLoading] = useState(true);
  const roleId = useSelector(SelectUserRole);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    request("/products").then((data) =>
      dispatch(setProductsData(data.products))
    );
    setIsLoading(false);
  }, [dispatch]);

  function handleAddProductBtn() {
    const form = document.querySelector("#form");
    form.classList.remove("hidden");

    const addBtn = document.querySelector("#addBtn");
    addBtn.classList.remove("hidden");
    setTimeout(() => {
      addBtn.classList.add("hidden");
    }, 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();

    request("/panel", "POST", { id, title, category, cost, image }).then(
      (data) => dispatch(addProduct(data.res))
    );
    const form = document.querySelector("#form");
    form.classList.add("hidden");
  }

  function handleCancelBtn() {
    const form = document.querySelector("#form");
    form.classList.add("hidden");
  }

  if (roleId !== 0) {
    navigate("/");
  }

  return (
    <div className="container mx-auto pt-[80px] flex">
      <div className="w-full">
        <h1 className="text-center p-2 text-xl font-bold">Панель Админа</h1>
        <button
          onClick={handleAddProductBtn}
          className="border rounded-md px-2 py-4 bg-green-300 hover:bg-green-400 "
        >
          Добавить продукт
        </button>
        <div id="form" className="mt-2 hidden">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="border p-2 h-[250px] w-[300px] flex flex-col justify-around"
          >
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Введите id"
              className="border text-center"
            />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border text-center"
              placeholder="Введите наименование"
            />
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border text-center"
              placeholder="Введите категорию"
            />
            <input
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="border text-center"
              placeholder="Введите стоимость"
            />
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border text-center"
              placeholder="Введите url"
            />
            <button type="submit" className="border bg-green-200">
              Добавить
            </button>
          </form>
          <button
            onClick={() => handleCancelBtn()}
            className="border bg-red-200 px-2"
          >
            Отмена
          </button>
        </div>
        <div className="mt-4">
          <div id="deleteBtn" className=" hidden bg-red-200 text-center py-6">
            Товар удален
          </div>
          <div id="addBtn" className="hidden bg-green-200 text-center py-6">
            Товар добавлен
          </div>
          <div id="editBtn" className=" hidden bg-yellow-200 text-center py-6">
            Товар изменен
          </div>
        </div>
        <div className="mt-4 border rounded-md h-[50px] flex justify-between font-bold text-center items-center px-4">
          <div className="w-[210px]">
            <h1>id</h1>
          </div>
          <div className="w-[210px]">
            <h1>Наименование</h1>
          </div>
          <div className="w-[210px]">
            <h1>Категория</h1>
          </div>
          <div className="w-[210px]">
            <h1>Стоимость</h1>
          </div>
          <div className="w-[210px]">
            <h1>Фото</h1>
          </div>
          <div className="w-[210px]">
            <h1>Действия</h1>
          </div>
        </div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {isLoading ? <Loader /> : <></>}
      </div>
    </div>
  );
}
