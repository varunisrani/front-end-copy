
import useStore from "./Store";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

// eslint-disable-next-line react/prop-types
export default function Trail({ id, name, price }) {
  const lok = useStore((state) => state.lok);
  const increasePop = useStore((state) => state.increase);
  const decpop = useStore((state) => state.decrease);
  const remove = useStore((state) => state.remove);
  const add = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    add({ id, name, price });
  };

  return (
    <div>
      <h1 className="text-4xl">{lok}</h1>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={increasePop}>Increase</button>
      <button onClick={decpop}>Decrease</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}


