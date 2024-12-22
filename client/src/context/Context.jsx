import { createContext, useState } from "react";
const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Context.Provider
      value={{ cartItems, addToCart, removeFromCart, calculateTotal }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
