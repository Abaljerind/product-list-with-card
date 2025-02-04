import MenuFood from "../components/MenuFood";
import CartSummary from "../components/CartSummary";
import { Title } from "../components/Title";
import OrderConfirmed from "./OrderConfirmed";
import { useEffect } from "react";

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

  useEffect(() => {
    if (isOrderConfirmed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOrderConfirmed]);

  return (
    <>
      <Title />
      <div className="lg:flex">
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
      </div>
      {isOrderConfirmed && (
        <div className="fixed inset-0 z-[999] flex h-full w-full items-center justify-center bg-black/50">
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
