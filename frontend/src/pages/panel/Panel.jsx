import React from "react";

export function Panel() {
  return (
    <div className="container mx-auto pt-[80px] flex">
      <div className="h-[500px] mt-4 mb-4 w-[250px] border p-4 rounded-md flex flex-col justify-around">
        <h1 className="font-bold h-[20px] ">
          Блок для добавления или редактирования товара
        </h1>
        <div className="flex flex-col justify-center items-center">
          <input
            className="text-center border rounded-md"
            type="text"
            placeholder="Наименование"
          />
          <input
            className="mt-4 border rounded-md text-center"
            type="text"
            placeholder="Категория"
          />
          <select
            className="px-2 border rounded-md py-4 mt-4 text-center"
            name="type"
            placeholder="Стоимость"
          >
            <option value="Худи">Худи</option>
            <option value="Майка">Майка</option>
            <option value="Кепка">Кепка</option>
          </select>
          <input
            className="mt-4 border rounded-md text-center"
            type="text"
            placeholder="Количество"
          />
        </div>
        <button className="border rounded-md py-2 hover:">Кнопка</button>
      </div>
      <div className="w-full">
        <div className="ml-3 mt-4 border rounded-md h-[50px] flex justify-between items-center px-4">
          <h1>id</h1>
          <h1>Наименование</h1>
          <h1>Категория</h1>
          <h1>Стоимость</h1>
          <h1>Кол-во</h1>
          <h1>Фото</h1>
          <h1>Действия</h1>
        </div>
        <div className="ml-2 mt-4  rounded-md h-[50px] flex justify-between items-center px-4">
          <h1 className="border bg-zinc-100 px-4 py-2 rounded-md">1</h1>
          <h1 className="border w-[120px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            Shirt
          </h1>
          <h1 className="border w-[100px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            Майка
          </h1>
          <h1 className="border w-[120px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            10100
          </h1>
          <h1 className="border w-[80px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            5
          </h1>
          <h1 className="border bg-zinc-100 px-4 py-2 rounded-md">URL</h1>
          <div className="border bg-zinc-100 px-2 py-2 rounded-md">
            <button>edit</button> <button>delete</button>
          </div>
        </div>
        <div className="ml-2 mt-4  rounded-md h-[50px] flex justify-between items-center px-4">
          <h1 className="border bg-zinc-100 px-4 py-2 rounded-md">1</h1>
          <h1 className="border w-[120px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            Shirt
          </h1>
          <h1 className="border w-[100px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            Майка
          </h1>
          <h1 className="border w-[120px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            10100
          </h1>
          <h1 className="border w-[80px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            5
          </h1>
          <h1 className="border bg-zinc-100 px-4 py-2 rounded-md">URL</h1>
          <div className="border bg-zinc-100 px-2 py-2 rounded-md">
            <button>edit</button> <button>delete</button>
          </div>
        </div>
        <div className="ml-2 mt-4  rounded-md h-[50px] flex justify-between items-center px-4">
          <h1 className="border bg-zinc-100 px-4 py-2 rounded-md">1</h1>
          <h1 className="border w-[120px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            Shirt
          </h1>
          <h1 className="border w-[100px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            Майка
          </h1>
          <h1 className="border w-[120px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            10100
          </h1>
          <h1 className="border w-[80px] text-center bg-zinc-100 px-4 py-2 rounded-md">
            5
          </h1>
          <h1 className="border bg-zinc-100 px-4 py-2 rounded-md">URL</h1>
          <div className="border bg-zinc-100 px-2 py-2 rounded-md">
            <button>edit</button> <button>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
