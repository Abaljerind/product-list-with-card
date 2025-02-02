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
    <div className="font-red-hat mx-auto mb-6 flex w-[335px] flex-col justify-center md:mb-10 md:w-64">
      <picture>
        {/* Image for desktop */}
        <source srcSet={food.image.desktop} media="(min-width: 1024px)" />
        {/* Image for tablet */}
        <source srcSet={food.image.tablet} media="(min-width: 768px)" />
        {/* Image for mobile */}
        <img
          src={food.image.mobile}
          alt={food.name}
          className="rounded-xl md:rounded-lg"
        />
      </picture>
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
