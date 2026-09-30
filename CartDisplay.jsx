import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

function CartDisplay() {
  const { cart, dispatch } = useContext(CartContext);

  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartDisplay;