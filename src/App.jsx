import { useState } from "react";
import foodData from "../data.json";
import cartIcon from "/images/icon-add-to-cart.svg";
import emptyCart from "/images/illustration-empty-cart.svg";
import plus from "/images/icon-increment-quantity.svg";
import minus from "/images/icon-decrement-quantity.svg";

document.body.style.backgroundColor = "rgb(254, 250, 247)";
function App() {
  const [data, setData] = useState(foodData);
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1 className="font-red-hat my-8 ml-6 text-5xl font-bold text-rose-900">
        Desserts
      </h1>
      {data.map((food, index) => {
        return (
          <div
            className="font-red-hat mx-auto mb-6 flex w-[335px] flex-col justify-center"
            key={index + 1}
          >
            <img
              src={food.image.mobile}
              alt={food.name}
              className="rounded-[12px]"
            />
            <div className="bg-reds mx-auto -mt-[30px] flex w-48 items-center justify-between gap-2 rounded-full px-3 py-3 font-semibold text-white">
              <button>
                <img
                  src={minus}
                  alt="Icon decrement"
                  className="h-8 w-8 scale-[60%] rounded-full border-2 border-white object-contain p-1"
                />
              </button>
              <p>1</p>
              <button>
                <img
                  src={plus}
                  alt="Icon decrement"
                  className="h-8 w-8 scale-[60%] rounded-full border-2 border-white object-contain p-1"
                />
              </button>
            </div>
            {/* <button className="mx-auto -mt-6 flex flex-wrap gap-2 rounded-full border-2 border-rose-300 bg-white px-6 py-3 font-semibold text-rose-900">
              <img
                src={cartIcon}
                alt="Add to cart icon"
                className="scale-110"
              />{" "}
              Add to Cart
            </button> */}
            <small className="mt-4 text-[16px] font-medium text-rose-500">
              {food.category}
            </small>
            <p className="text-lg font-semibold text-rose-900">{food.name}</p>
            <p className="text-reds text-lg font-semibold">${food.price}</p>
          </div>
        );
      })}

      <div className="font-red-hat mx-auto mt-6 mb-6 flex w-[335px] flex-col justify-center rounded-2xl bg-white">
        <h3 className="text-reds mt-7 ml-6 text-2xl font-bold">
          Your Cart (0)
        </h3>
        <div className="mt-8 mb-6 flex flex-col items-center justify-center">
          <img src={emptyCart} alt="Illustration of Empty Cart" />
          <p className="mt-3 text-[16px] font-semibold text-rose-500">
            Your added items will appear here
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
