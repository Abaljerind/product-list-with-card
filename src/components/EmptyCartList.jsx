import emptyCart from "/images/illustration-empty-cart.svg";

export default function EmptyCartList() {
  return (
    <div className="font-red-hat mx-auto mt-6 mb-6 flex w-[335px] flex-col justify-center rounded-2xl bg-white">
      <h3 className="text-reds mt-7 ml-6 text-2xl font-bold">Your Cart (0)</h3>
      <div className="mt-8 mb-6 flex flex-col items-center justify-center">
        <img src={emptyCart} alt="Illustration of Empty Cart" />
        <p className="mt-3 text-[16px] font-semibold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}
