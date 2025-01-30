import iconRemove from "/images/icon-remove-item.svg";

export default function OrderSummary({
  priceFoods,
  selectedFood,
  food,
  onDeleteFood,
}) {
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
