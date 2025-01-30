import { Link } from "react-router-dom";

export function Product({ product, isButtonDisabled, handleDelete }) {
  console.log(product);

  return (
    <div className="w-full pt-4">
      <div className="w-full flex h-[150px] justify-center items-center border-2">
        <div className="ml-4 w-full">
          <Link to={`/product/${product.productId}`}>
            <div className="flex justify-around mt-4">
              <div className="text-center">
                <h1>Товар:</h1>
                <img alt="product-photo" width={70} src={product.image} />
              </div>
              <div className="text-center">
                <h1>Наименование</h1>
                <p className="font-bold pt-4">{product.title}</p>
              </div>
              <div className="text-center">
                <h1>Размер</h1>
                <p className="font-bold pt-4">{product.size}</p>
              </div>
              <div className="text-center">
                <h1>Стоимость</h1>
                <p className="font-bold pt-4"> {product.cost}</p>
              </div>
            </div>
          </Link>
        </div>
        <button
          disabled={isButtonDisabled}
          onClick={() => handleDelete(product.id)}
          className="mr-4 border px-2 py-2 bg-red-300 hover:bg-red-400"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
