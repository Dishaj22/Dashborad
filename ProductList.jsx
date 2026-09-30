import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

function ProductList() {
  const { dispatch } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
    },
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: product,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;