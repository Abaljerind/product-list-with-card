import cart from "./assets/images/icon-add-to-cart.svg";
import waffleMobile from "./assets/images/image-waffle-mobile.jpg";

function App() {
  document.body.style.backgroundColor = "rgb(254, 250, 247)";

  return (
    <>
      <h1 className="font-red-hat my-8 ml-6 text-5xl font-bold text-rose-900">
        Desserts
      </h1>
      <div className="font-red-hat mx-auto mb-4 flex w-[335px] flex-col justify-center">
        <img
          src={waffleMobile}
          alt="Waffle with Berries"
          className="rounded-[12px]"
        />
        <button className="mx-auto -mt-6 mb-4 flex flex-wrap gap-2 rounded-full border-2 border-rose-300 bg-white px-6 py-3 font-semibold text-rose-900">
          <img src={cart} alt="Add to cart icon" className="scale-110" /> Add to
          Cart
        </button>
        <small className="text-[16px] font-medium text-rose-500">Waffle</small>
        <p className="text-lg font-semibold text-rose-900">
          Waffle with Berries
        </p>
        <p className="text-reds text-lg font-semibold">$6.50</p>
      </div>
    </>
  );
}

export default App;
