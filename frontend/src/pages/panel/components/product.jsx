import { useDispatch } from "react-redux";
import { request } from "../../../utils";
import { deleteProduct } from "../../../actions";
import { useState } from "react";

export function Product({ product }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [id, setId] = useState(product.id);
  const [image, setImage] = useState(product.image);
  const [cost, setCost] = useState(product.cost);

  function handleDelete(id) {
    request("/products", "DELETE", { id }).then(() =>
      dispatch(deleteProduct(id))
    );

    const deleteBtn = document.querySelector("#deleteBtn");
    deleteBtn.classList.remove("hidden");
    setTimeout(() => {
      deleteBtn.classList.add("hidden");
    }, 2000);
  }

  function handleEdit(id, title, category, cost, image) {
    request("/products", "PATCH", {
      productId: product.id,
      id,
      title,
      category,
      cost,
      image,
    });

    const editBtn = document.querySelector("#editBtn");
    editBtn.classList.remove("hidden");
    setTimeout(() => {
      editBtn.classList.add("hidden");
    }, 2000);
  }

  const onTitleChange = ({ target }) => setTitle(target.value);
  const onCategoryChange = ({ target }) => setCategory(target.value);
  const onCostChange = ({ target }) => setCost(target.value);
  const onImageChange = ({ target }) => setImage(target.value);
  const onIdChange = ({ target }) => setId(target.value);

  return (
    <div className="border rounded-md h-[50px] flex justify-between text-center items-center px-4">
      <div className="w-[210px] ">
        <input className="text-center" onChange={onIdChange} value={id} />
      </div>
      <div className="w-[210px]">
        <input className="text-center" onChange={onTitleChange} value={title} />
      </div>
      <div className="w-[210px]">
        <input
          className="text-center"
          onChange={onCategoryChange}
          value={category}
        />
      </div>
      <div className="w-[210px]">
        <input className="text-center" onChange={onCostChange} value={cost} />
      </div>
      <div className="w-[210px] truncate">
        <input onChange={onImageChange} value={image} />
      </div>
      <div className="w-[210px] flex justify-around">
        <button
          onClick={() => handleEdit(id, title, category, cost, image)}
          className="bg-yellow-200 hover:bg-yellow-300 px-6 py-1"
        >
          edit
        </button>
        <button
          onClick={() => handleDelete(product.id)}
          className="bg-red-200 hover:bg-red-300  px-6 py-1"
        >
          delete
        </button>
      </div>
    </div>
  );
}
