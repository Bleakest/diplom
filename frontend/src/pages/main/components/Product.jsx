export function Product({ imageUrl, name, cost }) {
  return (
    <div>
      <img width={250} src={imageUrl} />
      <h2>{name}</h2>
      <div>{cost}</div>
    </div>
  );
}
