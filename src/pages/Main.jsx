import { useEffect, useState } from "react";
import foodData from "../../data.json";

import MenuFood from "../components/MenuFood";
import CartSummary from "../components/CartSummary";
import { Title } from "../components/Title";

export default function Main() {
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

  const totalFood = cart.reduce((acc, { ...curr }) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, { ...curr }) => acc + curr.quantity * curr.price,
    0,
  );

  function handleDeleteFood(food) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== food.id));
  }

  useEffect(() => {
    console.table(cart);
  }, [cart]);

  return (
    <>
      <Title />
      <MenuFood
        menu={menu}
        cart={cart}
        onAddFood={handleAddFood}
        increment={increment}
        decrement={decrement}
      />

      <CartSummary
        totalFood={totalFood}
        totalPrice={totalPrice}
        cart={cart}
        onDeleteFood={handleDeleteFood}
      />
    </>
  );
}
