import CartList from "./CartList";
import EmptyCartList from "./EmptyCartList";

export default function CartSummary({
  totalFood,
  totalPrice,
  cart,
  onDeleteFood,
  onConfirmedOrder,
}) {
  return (
    <div className="lg:-mt-24">
      {totalFood ? (
        <CartList
          totalFood={totalFood}
          totalPrice={totalPrice}
          cart={cart}
          onDeleteFood={onDeleteFood}
          onConfirmedOrder={onConfirmedOrder}
        />
      ) : (
        <EmptyCartList />
      )}
    </div>
  );
}
