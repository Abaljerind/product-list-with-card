export default function OrderTotalPrice({ totalPrice }) {
  return (
    <div className="mr-6 mb-6 ml-6 flex items-center justify-between">
      <p className="text-[16px] font-semibold text-rose-500">Order Total</p>
      <p className="text-[28px] font-bold text-rose-900">
        ${Number(totalPrice).toFixed(2)}
      </p>
    </div>
  );
}
