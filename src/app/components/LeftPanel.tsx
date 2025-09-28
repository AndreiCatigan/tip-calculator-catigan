import Image from "next/image";

export default function LeftPanel() {
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
            className="w-full text-right pr-3 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Select Tip % */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Select Tip %</label>
        <div className="grid grid-cols-3 gap-3">
          {["5%", "10%", "15%", "25%", "50%"].map((tip) => (
            <button
              key={tip}
              className="bg-teal-900 text-white py-2 rounded-lg hover:bg-teal-700 transition"
            >
              {tip}
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom"
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
            className="w-full text-right pr-3 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
    </div>
  );
}
