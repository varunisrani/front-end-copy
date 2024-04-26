import Trail from "./Trail";

export function ProductList() {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <div>
      {products.map((product) => (
        <Trail key={product.id} {...product} />
      ))}
    </div>
  );
}
