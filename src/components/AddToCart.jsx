import cartIcon from "/images/icon-add-to-cart.svg";

export default function AddToCart({ food, onAddFood }) {
  return (
    <button
      className="mx-auto -mt-6 flex flex-wrap gap-2 rounded-full border-2 border-rose-300 bg-white px-6 py-3 font-semibold text-rose-900"
      onClick={() => onAddFood(food)}
    >
      <img src={cartIcon} alt="Add to cart icon" className="scale-110" /> Add to
      Cart
    </button>
  );
}
