import React, { useState } from 'react';

export default function ItemDet() {
  const [nights, setNights] = useState(1);
  const [rate, setRate] = useState(3275000);
  const [igstPercentage, setIgstPercentage] = useState(18);

  const calculateIGSTAmount = () => {
    return (rate * igstPercentage) / 100;
  };

  const calculateAmount = () => {
    return rate + calculateIGSTAmount();
  };

  return (
    <>
      {/* Item Details */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Item Details</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-2">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">S.L No</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Item & Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">SAC</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Nights</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Rate (INR)</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">IGST %</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">IGST Amt</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-gray-900 text-sm">1</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  className="w-full border-none focus:ring-0 focus:outline-none text-sm"
                  placeholder="Support Service"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  className="w-full border-none focus:ring-0 focus:outline-none text-sm"
                  placeholder="9983"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  className="w-full border-none focus:ring-0 focus:outline-none text-sm"
                  placeholder="1"
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  className="w-full border-none focus:ring-0 focus:outline-none text-sm"
                  placeholder="32,75,000.00"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  className="w-full border-none focus:ring-0 focus:outline-none text-sm"
                  placeholder="18"
                  value={igstPercentage}
                  onChange={(e) => setIgstPercentage(Number(e.target.value))}
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-900 text-sm">
                ₹{calculateIGSTAmount().toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-gray-900 text-sm">
                ₹{calculateAmount().toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
