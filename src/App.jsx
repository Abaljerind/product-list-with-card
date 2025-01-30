import { useEffect, useState } from "react";
import foodData from "../data.json";

import orderSuccess from "/images/icon-order-confirmed.svg";
import tiramisu from "/images/image-tiramisu-thumbnail.jpg";
import vanillaBean from "/images/image-creme-brulee-thumbnail.jpg";
import vanillaPanna from "/images/image-panna-cotta-thumbnail.jpg";

import MenuFood from "./components/MenuFood";
import CartSummary from "./components/CartSummary";
import { Title } from "./components/Title";

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
      {/* <div className="fixed top-0 right-0 left-0 z-[998] bg-black/50"> */}
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

      {/* <div className="font-red-hat fixed bottom-0 z-[999] flex h-full max-h-[85vh] w-full flex-col items-start overflow-y-scroll rounded-2xl bg-white px-5 py-8">
          <img src={orderSuccess} alt="icon order confirmation" />
          <h1 className="mt-4 text-5xl leading-14 font-bold text-rose-900">
            Order Confirmed
          </h1>
          <small className="mt-1 text-[16px] font-medium text-rose-500">
            We hope you enjoy your food!
          </small>

          <div className="my-6 w-full rounded-lg bg-rose-50 px-4 py-6">
            <div className="mb-4 flex w-full items-center border-b border-rose-100 pb-4">
              <img
                src={tiramisu}
                alt="classic tiramisu"
                className="h-12 w-12 rounded-sm"
              />
              <div className="ml-4 flex flex-col">
                <p className="text-sm font-semibold text-rose-900">
                  Classic Tiramissu
                </p>
                <small className="mt-2 text-sm">
                  <span className="text-reds font-semibold">1x</span>
                  <span className="ml-4 font-medium text-rose-400">
                    @ $5.50
                  </span>
                </small>
              </div>
              <p className="ml-auto text-sm font-semibold text-rose-500">
                $5.50
              </p>
            </div>
            <div className="mb-4 flex w-full items-center border-b border-rose-100 pb-4">
              <img
                src={vanillaBean}
                alt="vanilla bean creme"
                className="h-12 w-12 rounded-sm"
              />
              <div className="ml-4 flex flex-col">
                <p className="text-sm font-semibold text-rose-900">
                  Vanilla Bean Creme B...
                </p>
                <small className="mt-2 text-sm">
                  <span className="text-reds font-semibold">4x</span>
                  <span className="ml-4 font-medium text-rose-400">
                    @ $7.00
                  </span>
                </small>
              </div>
              <p className="ml-auto text-sm font-semibold text-rose-500">
                $28.00
              </p>
            </div>
            <div className="mb-4 flex w-full items-center border-b border-rose-100 pb-4">
              <img
                src={vanillaPanna}
                alt="vanilla panna"
                className="h-12 w-12 rounded-sm"
              />
              <div className="ml-4 flex flex-col">
                <p className="text-sm font-semibold text-rose-900">
                  Vanilla Panna Cotta
                </p>
                <small className="mt-2 text-sm">
                  <span className="text-reds font-semibold">2x</span>
                  <span className="ml-4 font-medium text-rose-400">
                    @ $6.50
                  </span>
                </small>
              </div>
              <p className="ml-auto text-sm font-semibold text-rose-500">
                $13.00
              </p>
            </div>

            <div className="mx-auto flex items-center justify-between">
              <p className="text-sm font-semibold text-rose-500">Order Total</p>
              <p className="text-2xl font-bold text-rose-900">$46.50</p>
            </div>
          </div>

          <button className="bg-reds mx-auto mb-6 w-full rounded-full py-4 font-semibold text-white">
            Start New Order
          </button>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
