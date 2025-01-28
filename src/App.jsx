import { useState } from "react";
import foodData from "../data.json";
import cart from "/images/icon-add-to-cart.svg";

document.body.style.backgroundColor = "rgb(254, 250, 247)";
function App() {
  const [data, setData] = useState(foodData);

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
            <button className="mx-auto -mt-6 flex flex-wrap gap-2 rounded-full border-2 border-rose-300 bg-white px-6 py-3 font-semibold text-rose-900">
              <img src={cart} alt="Add to cart icon" className="scale-110" />{" "}
              Add to Cart
            </button>
            <small className="mt-4 text-[16px] font-medium text-rose-500">
              {food.category}
            </small>
            <p className="text-lg font-semibold text-rose-900">{food.name}</p>
            <p className="text-reds text-lg font-semibold">${food.price}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
