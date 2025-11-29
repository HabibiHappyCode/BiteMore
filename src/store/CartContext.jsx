import { createContext, useEffect, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => { },
  increaseQty: () => { },
  decreaseQty: () => { },
});

const cartReducer = (state, action) => {
  // Load initial cart from localStorage
  if (action.type === "INIT") {
    return { items: action.items };
  }

  // Add NEW item only once (from product list)
  if (action.type === "ADD_ITEM") {
    const newItem = {
      id: action.item.idMeal,
      title: action.item.strMeal,
      image: action.item.strMealThumb,
      price: Number(action.item.price || action.item.idMeal),
      quantity: 1,
    };

    const updated = [...state.items, newItem];
    localStorage.setItem("cart", JSON.stringify(updated));

    return { items: updated };
  }

  // Increase quantity by ID
  if (action.type === "INCREASE") {
    const updated = state.items.map((item) =>
      item.id === action.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    localStorage.setItem("cart", JSON.stringify(updated));
    return { items: updated };
  }

  // Decrease quantity by ID
  if (action.type === "DECREASE") {
    let updated = state.items
      .map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updated));
    return { items: updated };
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  // Load localStorage ONCE
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({ type: "INIT", items: saved });
  }, []); // ← runs only once

  const addItem = (item) => dispatch({ type: "ADD_ITEM", item });
  const increaseQty = (id) => dispatch({ type: "INCREASE", id });
  const decreaseQty = (id) => dispatch({ type: "DECREASE", id });

  return (
    <CartContext.Provider
      value={{ items: cart.items, addItem, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartContext;
