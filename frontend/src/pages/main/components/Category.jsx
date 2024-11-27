import React from "react";

export function Category() {
  return (
    <div className="flex justify-center items-center mt-4">
      <ul className="flex w-[600px] justify-between">
        <li className="px-4 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-300 hover:cursor-pointer">
          Худи
        </li>
        <li className="px-4 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-300 hover:cursor-pointer">
          Футболки
        </li>
        <li className="px-4 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-300 hover:cursor-pointer">
          Лонгсливы
        </li>
        <li className="px-4 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-300 hover:cursor-pointer">
          Шорты
        </li>
        <li className="px-4 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-300 hover:cursor-pointer">
          Кепки
        </li>
        <li className="px-4 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-300 hover:cursor-pointer">
          Свитеры
        </li>
      </ul>
    </div>
  );
}

export default Category;
