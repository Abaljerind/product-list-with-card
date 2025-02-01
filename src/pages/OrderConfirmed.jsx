import orderSuccess from "/images/icon-order-confirmed.svg";

export default function OrderConfirmed({ cart, totalPrice, onNewOrder }) {
  return (
    <div className="font-red-hat fixed bottom-0 z-[999] flex h-full max-h-[85vh] w-full flex-col items-start overflow-y-scroll rounded-2xl bg-white px-5 py-8">
      <img src={orderSuccess} alt="icon order confirmation" />
      <h1 className="mt-4 text-5xl leading-14 font-bold text-rose-900">
        Order Confirmed
      </h1>
      <small className="mt-1 text-[16px] font-medium text-rose-500">
        We hope you enjoy your food!
      </small>

      {/* food list */}
      <div className="my-6 w-full rounded-lg bg-rose-50 px-4 py-6">
        {cart.map((food, index) => {
          return (
            <div
              className="mb-4 flex w-full items-center border-b border-rose-100 pb-4"
              key={index + 1}
            >
              <img
                src={food.imageThumbnail}
                alt={food.name}
                className="h-12 w-12 rounded-sm"
              />
              <div className="ml-4 flex flex-col">
                <p className="text-sm font-semibold text-rose-900">
                  {food.name}
                </p>
                <small className="mt-2 text-sm">
                  <span className="text-reds font-semibold">
                    {food.quantity}x
                  </span>
                  <span className="ml-4 font-medium text-rose-400">
                    @ ${Number(food.price).toFixed(2)}
                  </span>
                </small>
              </div>
              <p className="ml-auto text-sm font-semibold text-rose-500">
                ${Number(food.price * food.quantity).toFixed(2)}
              </p>
            </div>
          );
        })}

        {/* total and button */}
        <div className="mx-auto flex items-center justify-between">
          <p className="text-sm font-semibold text-rose-500">Order Total</p>
          <p className="text-2xl font-bold text-rose-900">
            ${Number(totalPrice).toFixed(2)}
          </p>
        </div>
      </div>

      <button
        className="bg-reds mx-auto mb-6 w-full rounded-full py-4 font-semibold text-white"
        onClick={onNewOrder}
      >
        Start New Order
      </button>
    </div>
  );
}
