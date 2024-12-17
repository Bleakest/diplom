export function Product({ product }) {
  console.log(product);

  return (
    <div className="w-full pt-4">
      <div className="w-full flex h-[150px] border-2">
        <div className="mt-4 ml-4 w-full ">
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <h1>Товар:</h1>
              <img width={70} src={product.image} />
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
        </div>
        <div className="mr-4 mt-2">&#x2717;</div>
      </div>
    </div>
  );
}
