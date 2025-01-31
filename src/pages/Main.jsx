import MenuFood from "../components/MenuFood";
import CartSummary from "../components/CartSummary";
import { Title } from "../components/Title";

export default function Main({
  menu,
  cart,
  onAddFood,
  increment,
  decrement,
  onDeleteFood,
}) {
  const totalFood = cart.reduce((acc, { ...curr }) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, { ...curr }) => acc + curr.quantity * curr.price,
    0,
  );

  return (
    <>
      <Title />
      <MenuFood
        menu={menu}
        cart={cart}
        onAddFood={onAddFood}
        increment={increment}
        decrement={decrement}
      />

      <CartSummary
        totalFood={totalFood}
        totalPrice={totalPrice}
        cart={cart}
        onDeleteFood={onDeleteFood}
      />
    </>
  );
}
