import { useState } from "react";
import Main from "./pages/Main";

import foodData from "../data.json";

document.body.style.backgroundColor = "rgb(254, 250, 247)";
function App() {
  const [menu, setMenu] = useState(foodData);
  const [cart, setCart] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  function handleAddFood(food) {
    const id = `${food.name}-${food.price}`;

    const newFood = {
      id,
      name: food.name,
      price: food.price,
      quantity: 1,
      imageThumbnail: food.image.thumbnail,
    };

    const existingFood = cart.find((item) => item.id === newFood.id);
    if (existingFood) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      );
    } else {
      setCart((prevCart) => [...prevCart, newFood]);
    }
  }

  function increment(food) {
    setCart((prevCart) =>
      prevCart.map((item) => {
        return item.id === food.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      }),
    );
  }

  function decrement(food) {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          return item.id === food.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => item.quantity > 0),
    );
  }

  function handleDeleteFood(food) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== food.id));
  }

  function handleConfirmedOrder() {
    setIsOrderConfirmed(true);
  }

  function handleNewOrder() {
    setIsOrderConfirmed(false);
    setCart([]);
  }

  return (
    <>
      <Main
        menu={menu}
        cart={cart}
        onAddFood={handleAddFood}
        increment={increment}
        decrement={decrement}
        onDeleteFood={handleDeleteFood}
        isOrderConfirmed={isOrderConfirmed}
        onConfirmedOrder={handleConfirmedOrder}
        onNewOrder={handleNewOrder}
      />
    </>
  );
}

export default App;
