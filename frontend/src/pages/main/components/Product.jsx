export function Product({ product }) {
  
  return (
    <div>
      <img width={250} src={product.image} alt='clothes' />
      <h2>{product.title}</h2>
      <div>{product.cost}</div>
    </div>
  );
}
