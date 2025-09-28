
interface RightPanelProps {
  tipAmount: number;
  totalPerPerson: number;
  reset: () => void;
}

export default function RightPanel({ tipAmount, totalPerPerson, reset }: RightPanelProps) {
  return (
    <div className="flex-1 bg-teal-900 text-white p-6 rounded-xl flex flex-col justify-between shadow-md">
      {/* Tip Amount */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm">Tip Amount</p>
          <span className="text-gray-400 text-xs">/ person</span>
        </div>
        <p className="text-3xl font-bold text-teal-400">
          ${tipAmount.toFixed(2)}
        </p>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm">Total</p>
          <span className="text-gray-400 text-xs">/ person</span>
        </div>
        <p className="text-3xl font-bold text-teal-400">
          ${totalPerPerson.toFixed(2)}
        </p>
      </div>

      {/* Reset button */}
      <button onClick={reset} className="w-full bg-teal-500 text-teal-900 font-bold py-2 rounded-lg hover:bg-teal-400 transition">
        RESET
      </button>
    </div>
  );
}
