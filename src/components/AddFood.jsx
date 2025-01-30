import plus from "/images/icon-increment-quantity.svg";
import minus from "/images/icon-decrement-quantity.svg";

export default function AddFood({ selectedFood, increment, decrement }) {
  return (
    <div className="bg-reds mx-auto -mt-[30px] flex w-44 items-center justify-between gap-2 rounded-full px-3 py-3 font-semibold text-white">
      <button onClick={() => decrement(selectedFood)}>
        <img
          src={minus}
          alt="Icon decrement"
          className="h-8 w-8 scale-[60%] rounded-full border-2 border-white object-contain p-1"
        />
      </button>
      <p>{selectedFood?.quantity || 0}</p>
      <button onClick={() => increment(selectedFood)}>
        <img
          src={plus}
          alt="Icon decrement"
          className="h-8 w-8 scale-[60%] rounded-full border-2 border-white object-contain p-1"
        />
      </button>
    </div>
  );
}
