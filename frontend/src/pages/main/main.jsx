import React, { useLayoutEffect, useState } from "react";
import bgImage from "../../assets/img/photo.jpg";
import SearchPanel from "../../components/SearchPanel";
import Footer from "../../components/footer";
import { Product, Category } from "./components";
import { request } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setProductsData } from "../../actions";
import { selectProducts } from "../../selectors";
import { Loader } from "../../components/loader";

export function Main() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [array, setArray] = useState([]);
  const categorys = [{ name: "Худи" }, { name: "Футболки" }, { name: "Майка" }];

  useLayoutEffect(() => {
    request("/products").then((data) => {
      dispatch(setProductsData(data.products));

      setIsLoading(false);
      setArray(data.products);
    });
  }, []);

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

  function handleCategoryClick(e) {
    setIsCategorySelected(!isCategorySelected);
    if (!isCategorySelected) {
      setArray(
        products.filter((product) => product.category === e.target.innerHTML)
      );

      categorys.map((category) => {
        if (e.target.innerHTML !== category.name) {
          const el = document.querySelector(`#${category.name}`);
          el.setAttribute("disabled", "true");
        }
      });
    } else {
      categorys.map((category) => {
        const el = document.querySelector(`#${category.name}`);
        el.removeAttribute("disabled");
      });
      setArray(products);
    }
  }

  return (
    <div className="pt-[80px]">
      <div>
        <div className="bg-zinc-700 w-full h-[350px] flex">
          <img src={bgImage} alt="bg-photo" className="w-full" />
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center items-center mt-4">
            <div className="flex w-full justify-center">
              {categorys.map((category) => (
                <Category
                  array={array}
                  key={category.name}
                  category={category}
                  isCategorySelected={isCategorySelected}
                  handleCategoryClick={handleCategoryClick}
                />
              ))}
            </div>
          </div>
          <SearchPanel search={search} onSearchHandler={onSearchHandler} />
          <div className="flex flex-wrap justify-around max-w-[1240px]">
            {searchedArray ? (
              searchedArray.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <div>пусто</div>
            )}
          </div>
          {isLoading ? <Loader /> : <></>}
        </div>
      </div>

      <Footer />
    </div>
  );
}
