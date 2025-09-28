"use client";

import Image from "next/image";

interface LeftPanelProps {
  bill: number;
  setBill: (value: number) => void;
  tip: number;
  setTip: (value: number) => void;
  people: number;
  setPeople: (value: number) => void;
  customTipInput: string;
  setCustomTipInput: (value: string) => void;
}

export default function LeftPanel({
  bill,
  setBill,
  tip,
  setTip,
  people,
  setPeople,
  customTipInput,
  setCustomTipInput,
}: LeftPanelProps) {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
      {/* Bill */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Bill</label>
        <div className="relative">
          <Image
            src="/icon-dollar.svg"
            alt="Dollar Icon"
            width={16}
            height={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="number"
            placeholder="0"
            value={bill === 0 ? "" : bill}
            onChange={(e) => setBill(Number(e.target.value))}
            onFocus={(e) => e.target.select()}
            className="w-full text-right pr-3 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Select Tip % */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Select Tip %</label>
        <div className="grid grid-cols-3 gap-3">
          {tipOptions.map((t) => (
            <button
              key={t}
              className={`py-2 rounded-lg transition ${
                customTipInput === "" && tip === t
                  ? "bg-teal-400 text-teal-900"
                  : "bg-teal-900 text-white hover:bg-teal-700"
              }`}
              onClick={() => {
                setTip(t);
                setCustomTipInput(""); // clear custom input when button clicked
              }}
            >
              {t}%
            </button>
          ))}

          <input
            type="number"
            placeholder="Custom"
            value={customTipInput}
            onChange={(e) => {
              const val = e.target.value;
              setCustomTipInput(val);        // always update display
              setTip(val === "" ? 0 : Number(val)); // update tip immediately
            }}
            onFocus={(e) => e.target.select()}
            className="w-full text-center py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Number of People */}
      <div>
        <label className="block text-gray-600 mb-2">Number of People</label>
        <div className="relative">
          <Image
            src="/icon-person.svg"
            alt="Person Icon"
            width={16}
            height={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="number"
            placeholder="0"
            min={1}
            value={people === 0 ? "" : people}
            onChange={(e) => setPeople(Number(e.target.value))}
            onFocus={(e) => e.target.select()}
            className="w-full text-right pr-3 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
    </div>
  );
}
