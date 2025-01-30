import { Link } from "react-router-dom";

export function Product({ product }) {
  
  return (
    <Link to={`/product/${product.id}`}>
      <div className="text-center">
        <img width={250} src={product.image} alt="clothes" />
        <h2 >{product.title}</h2>
        <div>{product.cost}</div>
      </div>
    </Link>
  );
}
