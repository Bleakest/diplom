import { useDispatch } from "react-redux";
import { request } from "../../../utils";
import { deleteProduct, setProductsData } from "../../../store/actions";
import { useEffect, useState } from "react";
import { Product, EditModal } from "./components";

export function ProductInfo({ setRefresh, refresh }) {
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);
  const [EditingProductId, setEditingProductId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    request("/products").then((data) => {
      dispatch(setProductsData(data.products));
      setArray(data.products);
    });
  }, [dispatch, refresh]);

  function handleDelete(id) {
    request("/products", "DELETE", { id })
      .then(() => dispatch(deleteProduct(id)))
      .then(() => setRefresh(!refresh));
  }

  function handleEditClick(producId) {
    setEditingProductId(producId);
    setIsModalOpen(!isModalOpen);
  }

  function handleEditButton(product) {
    request("/products", "PATCH", {
      EditingProductId,
      id: product.id,
      title: product.title,
      category: product.category,
      cost: product.cost,
      image: product.image,
    })
      .then(() => setIsModalOpen(false))
      .then(() => setRefresh(!refresh));
  }

  return (
    <div>
      {isModalOpen ? (
        <EditModal
          handleEditButton={handleEditButton}
          handleEditClick={handleEditClick}
        />
      ) : (
        <></>
      )}

      <Product
        products={array}
        handleEditClick={handleEditClick}
        handleDelete={handleDelete}
      />
    </div>
  );
}
