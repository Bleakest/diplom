import React from "react";

export function ProductItem({ handleEditClick, handleDelete, product }) {
  return (
    <div className="border rounded-md h-[50px] flex justify-between text-center items-center px-4">
      <div className="w-[210px] ">
        <h1 className="text-center">{product.id}</h1>
      </div>
      <div className="w-[210px]">
        <h1 className="text-center">{product.title}</h1>
      </div>
      <div className="w-[210px]">
        <h1 className="text-center">{product.category}</h1>
      </div>
      <div className="w-[210px]">
        <h1 className="text-center">{product.cost}</h1>
      </div>
      <div className="w-[210px] truncate">
        <h1 className="text-center">{product.image}</h1>
      </div>
      <div className="w-[210px] flex justify-around">
        <button
          onClick={() => handleEditClick(product.id)}
          className="bg-yellow-200 hover:bg-yellow-300 px-6 py-1"
        >
          edit
        </button>
        <button
          onClick={() => handleDelete()}
          className="bg-red-200 hover:bg-red-300  px-6 py-1"
        >
          delete
        </button>
      </div>
    </div>
  );
}
