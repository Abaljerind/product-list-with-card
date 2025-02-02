import FoodList from "./FoodList";

export default function MenuFood({
  menu,
  cart,
  increment,
  decrement,
  onAddFood,
}) {
  return (
    <div className="md:flex md:flex-wrap md:px-8">
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
            onAddFood={onAddFood}
          />
        );
      })}
    </div>
  );
}
