import orderSuccess from "/images/icon-order-confirmed.svg";
import tiramisu from "/images/image-tiramisu-thumbnail.jpg";
import vanillaBean from "/images/image-creme-brulee-thumbnail.jpg";
import vanillaPanna from "/images/image-panna-cotta-thumbnail.jpg";

export default function OrderConfirmed() {
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
        <div className="mb-4 flex w-full items-center border-b border-rose-100 pb-4">
          <img
            src={tiramisu}
            alt="classic tiramisu"
            className="h-12 w-12 rounded-sm"
          />
          <div className="ml-4 flex flex-col">
            <p className="text-sm font-semibold text-rose-900">
              Classic Tiramissu
            </p>
            <small className="mt-2 text-sm">
              <span className="text-reds font-semibold">1x</span>
              <span className="ml-4 font-medium text-rose-400">@ $5.50</span>
            </small>
          </div>
          <p className="ml-auto text-sm font-semibold text-rose-500">$5.50</p>
        </div>
        <div className="mb-4 flex w-full items-center border-b border-rose-100 pb-4">
          <img
            src={vanillaBean}
            alt="vanilla bean creme"
            className="h-12 w-12 rounded-sm"
          />
          <div className="ml-4 flex flex-col">
            <p className="text-sm font-semibold text-rose-900">
              Vanilla Bean Creme B...
            </p>
            <small className="mt-2 text-sm">
              <span className="text-reds font-semibold">4x</span>
              <span className="ml-4 font-medium text-rose-400">@ $7.00</span>
            </small>
          </div>
          <p className="ml-auto text-sm font-semibold text-rose-500">$28.00</p>
        </div>
        <div className="mb-4 flex w-full items-center border-b border-rose-100 pb-4">
          <img
            src={vanillaPanna}
            alt="vanilla panna"
            className="h-12 w-12 rounded-sm"
          />
          <div className="ml-4 flex flex-col">
            <p className="text-sm font-semibold text-rose-900">
              Vanilla Panna Cotta
            </p>
            <small className="mt-2 text-sm">
              <span className="text-reds font-semibold">2x</span>
              <span className="ml-4 font-medium text-rose-400">@ $6.50</span>
            </small>
          </div>
          <p className="ml-auto text-sm font-semibold text-rose-500">$13.00</p>
        </div>

        {/* total and button */}
        <div className="mx-auto flex items-center justify-between">
          <p className="text-sm font-semibold text-rose-500">Order Total</p>
          <p className="text-2xl font-bold text-rose-900">$46.50</p>
        </div>
      </div>

      <button className="bg-reds mx-auto mb-6 w-full rounded-full py-4 font-semibold text-white">
        Start New Order
      </button>
    </div>
  );
}
