import FoodList from "./FoodList";

export default function MenuFood({
  menu,
  cart,
  increment,
  decrement,
  onAddFood,
}) {
  return (
    <div className="md:flex md:flex-wrap md:px-8 lg:-mr-10 lg:w-full lg:max-w-[75%] lg:items-start lg:px-16">
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
