import MenuFood from "../components/MenuFood";
import CartSummary from "../components/CartSummary";
import { Title } from "../components/Title";
import OrderConfirmed from "./OrderConfirmed";

export default function Main({
  menu,
  cart,
  onAddFood,
  increment,
  decrement,
  onDeleteFood,
  isOrderConfirmed,
  onConfirmedOrder,
  onNewOrder,
}) {
  const totalFood = cart.reduce((acc, { ...curr }) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, { ...curr }) => acc + curr.quantity * curr.price,
    0,
  );

  return (
    <>
      {!isOrderConfirmed ? (
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
            onConfirmedOrder={onConfirmedOrder}
          />
        </>
      ) : (
        <div className="fixed top-0 right-0 left-0 z-[998] bg-black/50">
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
            onConfirmedOrder={onConfirmedOrder}
          />

          <OrderConfirmed
            cart={cart}
            totalPrice={totalPrice}
            onNewOrder={onNewOrder}
          />
        </div>
      )}
    </>
  );
}
