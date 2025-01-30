import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../store/selectors";
import SearchPanel from "../../../components/SearchPanel";
import { Product, Category } from "./components";
import { Loader } from "../../../components/Loader";
import { request } from "../../../utils";
import { setProductsData } from "../../../store/actions";

const categorys = [
  { name: "Все товары" },
  { name: "Худи" },
  { name: "Футболки" },
  { name: "Майка" },
];

export function ProductsSection() {
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);
  const products = useSelector(selectProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    request("/products")
      .then((data) => {
        dispatch(setProductsData(data.products));
        setArray(data.products);
      })
      .then(() => setIsLoading(false));
  }, [dispatch]);

  function handleCategoryClick(e) {
    if (e.target.innerHTML === "Все товары") {
      setArray(products);
    } else {
      setArray(
        products.filter((product) => product.category === e.target.innerHTML)
      );
    }
  }

  function onSearchHandler(e) {
    setSearch(e.target.value);
  }

  const searchedArray = search
    ? array.filter((product) => {
        if (product.title.includes(search)) {
          return product;
        }
      })
    : array;

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center mt-4">
          <div className="flex w-full justify-center">
            {categorys.map((category) => (
              <Category
                array={array}
                key={category.name}
                category={category}
                handleCategoryClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
        <SearchPanel search={search} onSearchHandler={onSearchHandler} />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap justify-around max-w-[1240px]">
            {searchedArray ? (
              searchedArray.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <div>пусто</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
