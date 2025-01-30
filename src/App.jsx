import { useEffect, useState } from "react";
import foodData from "../data.json";
import cartIcon from "/images/icon-add-to-cart.svg";
import emptyCart from "/images/illustration-empty-cart.svg";
import plus from "/images/icon-increment-quantity.svg";
import minus from "/images/icon-decrement-quantity.svg";
import iconRemove from "/images/icon-remove-item.svg";
import iconCarbon from "/images/icon-carbon-neutral.svg";
import orderSuccess from "/images/icon-order-confirmed.svg";
import tiramisu from "/images/image-tiramisu-thumbnail.jpg";
import vanillaBean from "/images/image-creme-brulee-thumbnail.jpg";
import vanillaPanna from "/images/image-panna-cotta-thumbnail.jpg";

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
      <h1 className="font-red-hat my-8 ml-6 text-5xl font-bold text-rose-900">
        Desserts
      </h1>
      {menu.map((food, index) => {
        const selectedFood = cart.find(
          (item) => item.id === `${food.name}-${food.price}`,
        );

        return (
          <FoodList
            key={index + 1}
            food={food}
            selectedFood={selectedFood}
            increment={increment}
            decrement={decrement}
            onAddFood={handleAddFood}
          />
        );
      })}

      {totalFood ? (
        <CartList
          totalFood={totalFood}
          totalPrice={totalPrice}
          cart={cart}
          onDeleteFood={handleDeleteFood}
        />
      ) : (
        <EmptyCartList />
      )}

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

function FoodList({ food, selectedFood, increment, decrement, onAddFood }) {
  return (
    <div className="font-red-hat mx-auto mb-6 flex w-[335px] flex-col justify-center">
      <img src={food.image.mobile} alt={food.name} className="rounded-[12px]" />
      {selectedFood ? (
        <AddFood
          selectedFood={selectedFood}
          increment={increment}
          decrement={decrement}
        />
      ) : (
        <AddToCart food={food} onAddFood={onAddFood} />
      )}

      <small className="mt-4 text-[16px] font-medium text-rose-500">
        {food.category}
      </small>
      <p className="text-lg font-semibold text-rose-900">{food.name}</p>
      <p className="text-reds text-lg font-semibold">${food.price}</p>
    </div>
  );
}

function AddFood({ selectedFood, increment, decrement }) {
  return (
    <div className="bg-reds mx-auto -mt-[30px] flex w-44 items-center justify-between gap-2 rounded-full px-3 py-3 font-semibold text-white">
      <button onClick={() => decrement(selectedFood)}>
        <img
          src={minus}
          alt="Icon decrement"
          className="h-8 w-8 scale-[60%] rounded-full border-2 border-white object-contain p-1"
        />
      </button>
      <p>{selectedFood?.quantity || 0}</p>
      <button onClick={() => increment(selectedFood)}>
        <img
          src={plus}
          alt="Icon decrement"
          className="h-8 w-8 scale-[60%] rounded-full border-2 border-white object-contain p-1"
        />
      </button>
    </div>
  );
}

function AddToCart({ food, onAddFood }) {
  return (
    <button
      className="mx-auto -mt-6 flex flex-wrap gap-2 rounded-full border-2 border-rose-300 bg-white px-6 py-3 font-semibold text-rose-900"
      onClick={() => onAddFood(food)}
    >
      <img src={cartIcon} alt="Add to cart icon" className="scale-110" /> Add to
      Cart
    </button>
  );
}

function CartList({ totalFood, totalPrice, cart, onDeleteFood }) {
  return (
    <div className="font-red-hat mx-auto mt-6 mb-6 flex w-[335px] flex-col justify-center rounded-2xl bg-white">
      <h3 className="text-reds my-7 ml-6 text-2xl font-bold">
        Your Cart ({totalFood})
      </h3>

      {cart.map((food, index) => {
        const priceFoods = food.price * food.quantity;
        const selectedFood = cart.find(
          (item) => item.id === `${food.name}-${food.price}`,
        );

        return (
          <ListFoodInsideCart
            key={index + 1}
            priceFoods={priceFoods}
            selectedFood={selectedFood}
            food={food}
            onDeleteFood={onDeleteFood}
          />
        );
      })}

      <div className="mr-6 mb-6 ml-6 flex items-center justify-between">
        <p className="text-[16px] font-semibold text-rose-500">Order Total</p>
        <p className="text-[28px] font-bold text-rose-900">
          ${Number(totalPrice).toFixed(2)}
        </p>
      </div>
      <div className="mr-6 mb-6 ml-6 flex items-center justify-center gap-2 rounded-xl bg-rose-50 px-6 py-3">
        <img src={iconCarbon} alt="Icon Carbon Neutral" />
        <p className="text-sm font-medium text-rose-500">
          This is a
          <span className="font-semibold text-rose-900"> carbon-neutral </span>
          delivery
        </p>
      </div>
      <button className="bg-reds mx-auto mb-6 w-[85%] rounded-full py-4 font-semibold text-white">
        Confirm Order
      </button>
    </div>
  );
}

function ListFoodInsideCart({ priceFoods, selectedFood, food, onDeleteFood }) {
  return (
    <div className="mr-6 mb-6 ml-6 flex justify-between border-b border-rose-100 pb-4">
      <div className="flex flex-col">
        <p className="text-[16px] font-semibold text-rose-900">{food.name}</p>
        <small className="mt-2 text-[16px]">
          <span className="text-reds font-semibold">{food.quantity}x</span>
          <span className="ml-4 font-medium text-rose-400">
            @ ${Number(food.price).toFixed(2)}
          </span>
          <span className="ml-1 font-semibold text-rose-500">
            {" "}
            ${Number(priceFoods).toFixed(2)}
          </span>
        </small>
      </div>
      <button onClick={() => onDeleteFood(selectedFood)}>
        <img
          src={iconRemove}
          alt="icon remove"
          className="h-8 w-8 scale-[60%] rounded-full border-2 border-rose-300 object-contain p-1"
        />
      </button>
    </div>
  );
}

function EmptyCartList() {
  return (
    <div className="font-red-hat mx-auto mt-6 mb-6 flex w-[335px] flex-col justify-center rounded-2xl bg-white">
      <h3 className="text-reds mt-7 ml-6 text-2xl font-bold">Your Cart (0)</h3>
      <div className="mt-8 mb-6 flex flex-col items-center justify-center">
        <img src={emptyCart} alt="Illustration of Empty Cart" />
        <p className="mt-3 text-[16px] font-semibold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default App;
