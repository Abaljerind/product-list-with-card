import { useEffect, useState } from "react";
import Main from "./pages/Main";

import foodData from "../data.json";

document.body.style.backgroundColor = "rgb(254, 250, 247)";
function App() {
  const [menu, setMenu] = useState(foodData);
  const [cart, setCart] = useState([]);

  function handleAddFood(food) {
    const id = `${food.name}-${food.price}`;

    const newFood = {
      id,
      name: food.name,
      price: food.price,
      quantity: 1,
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

  useEffect(() => {
    console.table(cart);
  }, [cart]);

  return (
    <>
      {/* <div className="fixed top-0 right-0 left-0 z-[998] bg-black/50"> */}
      <Main
        menu={menu}
        cart={cart}
        onAddFood={handleAddFood}
        increment={increment}
        decrement={decrement}
        onDeleteFood={handleDeleteFood}
      />
      {/* </div> */}
    </>
  );
}

export default App;
