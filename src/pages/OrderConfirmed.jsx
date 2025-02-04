import orderSuccess from "/images/icon-order-confirmed.svg";

export default function OrderConfirmed({ cart, totalPrice, onNewOrder }) {
  return (
    <div className="font-red-hat md: no-scrollbar fixed bottom-0 z-[999] flex h-full max-h-[85vh] w-full flex-col items-start overflow-y-scroll rounded-2xl bg-white px-5 py-8 md:left-[50%] md:w-[80%] md:-translate-x-[50%] lg:top-[50%] lg:h-fit lg:w-[37%] lg:-translate-y-[50%] lg:rounded-xl lg:py-6">
      <img src={orderSuccess} alt="icon order confirmation" />
      <h1 className="mt-4 text-5xl leading-14 font-bold text-rose-900">
        Order Confirmed
      </h1>
      <small className="mt-1 text-[16px] font-medium text-rose-500 md:pl-2 md:text-lg">
        We hope you enjoy your food!
      </small>

      {/* food list */}
      <div className="my-6 w-full rounded-lg bg-rose-50 px-4 py-6 md:mx-auto md:w-[90%] lg:w-full">
        {cart.map((food, index) => {
          return (
            <div
              className="mb-4 flex w-full items-center border-b border-rose-100 pb-4"
              key={index + 1}
            >
              <img
                src={food.imageThumbnail}
                alt={food.name}
                className="h-12 w-12 rounded-sm md:h-14 md:w-14 md:rounded-md"
              />
              <div className="ml-4 flex flex-col">
                <p className="text-sm font-semibold text-rose-900 md:text-[16px]">
                  {food.name}
                </p>
                <small className="mt-2 text-sm md:text-[16px]">
                  <span className="text-reds font-semibold">
                    {food.quantity}x
                  </span>
                  <span className="ml-4 font-medium text-rose-400">
                    @ ${Number(food.price).toFixed(2)}
                  </span>
                </small>
              </div>
              <p className="ml-auto text-sm font-semibold text-rose-500 md:text-[16px]">
                ${Number(food.price * food.quantity).toFixed(2)}
              </p>
            </div>
          );
        })}

        {/* total and button */}
        <div className="mx-auto flex items-center justify-between">
          <p className="text-sm font-semibold text-rose-500 md:text-lg">
            Order Total
          </p>
          <p className="text-2xl font-bold text-rose-900 md:text-3xl">
            ${Number(totalPrice).toFixed(2)}
          </p>
        </div>
      </div>

      <button
        className="bg-reds mx-auto w-full rounded-full py-4 font-semibold text-white md:w-[90%] lg:w-full"
        onClick={onNewOrder}
      >
        Start New Order
      </button>
    </div>
  );
}
