export default function RightPanel() {
  return (
    <div className="flex-1 bg-teal-900 text-white p-6 rounded-xl flex flex-col justify-between shadow-md">
      {/* Tip Amount */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm">Tip Amount</p>
          <span className="text-gray-400 text-xs">/ person</span>
        </div>
        <p className="text-3xl font-bold text-teal-400">$0.00</p>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm">Total</p>
          <span className="text-gray-400 text-xs">/ person</span>
        </div>
        <p className="text-3xl font-bold text-teal-400">$0.00</p>
      </div>

      {/* Reset button */}
      <button className="w-full bg-teal-500 text-teal-900 font-bold py-2 rounded-lg hover:bg-teal-400 transition">
        RESET
      </button>
    </div>
  );
}
