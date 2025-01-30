import React, { useState } from "react";
import { request } from "../../../utils";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/actions";

export function AddModal({
  handleAddClick,
  setIsModalOpen,
  setRefresh,
  refresh,
}) {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [image, setImage] = useState();

  function handleAddButton(newProduct) {
    request("/panel", "POST", newProduct)
      .then((data) => dispatch(addProduct(data.res)))
      .then(() => setIsModalOpen(false))
      .then(() => setRefresh(!refresh));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      id,
      title,
      category,
      cost,
      image,
    };
    handleAddButton(newProduct);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Добавить новый продукт</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              ID:
            </label>
            <input
              type="text"
              onChange={(e) => setId(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Название:
            </label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Категория:
            </label>
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Цена:
            </label>
            <input
              type="number"
              onChange={(e) => setCost(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Ссылка на изображение:
            </label>
            <input
              type="text"
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => handleAddClick()}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Закрыть
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
