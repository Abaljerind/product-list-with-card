import iconCarbon from "/images/icon-carbon-neutral.svg";

import OrderSummary from "./OrderSummary";
import OrderTotalPrice from "./OrderTotalPrice";

export default function CartList({
  totalFood,
  totalPrice,
  cart,
  onDeleteFood,
  onConfirmedOrder,
}) {
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
          <OrderSummary
            key={index + 1}
            priceFoods={priceFoods}
            selectedFood={selectedFood}
            food={food}
            onDeleteFood={onDeleteFood}
          />
        );
      })}

      <OrderTotalPrice totalPrice={totalPrice} />

      <div className="mr-6 mb-6 ml-6 flex items-center justify-center gap-2 rounded-xl bg-rose-50 px-6 py-3">
        <img src={iconCarbon} alt="Icon Carbon Neutral" />
        <p className="text-sm font-medium text-rose-500">
          This is a
          <span className="font-semibold text-rose-900"> carbon-neutral </span>
          delivery
        </p>
      </div>
      <button
        className="bg-reds mx-auto mb-6 w-[85%] rounded-full py-4 font-semibold text-white"
        onClick={onConfirmedOrder}
      >
        Confirm Order
      </button>
    </div>
  );
}
