import AddFood from "./AddFood";
import AddToCart from "./AddToCart";

export default function FoodList({
  food,
  selectedFood,
  increment,
  decrement,
  onAddFood,
}) {
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
      <p className="text-reds text-lg font-semibold">
        ${Number(food.price).toFixed(2)}
      </p>
    </div>
  );
}
