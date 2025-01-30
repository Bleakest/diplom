import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SelectUserRole } from "../../store/selectors";
import { useNavigate } from "react-router-dom";
import { AddModal, ProductInfo } from "./components";

export function Panel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const roleId = useSelector(SelectUserRole);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(true);

  function handleAddClick() {
    setIsModalOpen(!isModalOpen);
  }

  if (roleId !== 0) {
    navigate("/");
  }

  return (
    <div className="container mx-auto pt-[80px] flex">
      <div className="w-full pt-4">
        <button
          onClick={handleAddClick}
          className="border rounded-md px-2 py-4 bg-green-300 hover:bg-green-400 "
        >
          Добавить продукт
        </button>

        {isModalOpen ? (
          <AddModal
            refresh={refresh}
            setRefresh={setRefresh}
            setIsModalOpen={setIsModalOpen}
            handleAddClick={handleAddClick}
          />
        ) : (
          <></>
        )}

        <ProductInfo refresh={refresh} setRefresh={setRefresh} />
      </div>
    </div>
  );
}
