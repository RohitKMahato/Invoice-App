import React from 'react';

export default function QRCodeSection() {
  return (
    <>
      {/* QR Code Section */}
      <div className="h-24 w-24 border border-gray-300">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
          alt="QR Code"
          className="h-full w-full"
        />
      </div>
      <p className="text-sm text-gray-500 ml-4">
        Scan the QR code to view the configured information.
      </p>

      {/* HSN/SAC Summary Section */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700">HSN/SAC Summary:</h3>
        <table className="min-w-full mt-2 border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
                HSN/SAC
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
                Taxable Amount
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
                IGST
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700">
                Total Tax Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">9983</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">₹32,75,000.00</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Rate:</span>
                  <span>18%</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Amount:</span>
                  <span>₹5,89,500.00</span>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">₹5,89,500.00</td>
            </tr>
            <tr className="font-bold">
              <td className="border border-gray-300 px-4 py-2 text-sm">Total</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">₹32,75,000.00</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">₹5,89,500.00</td>
              <td className="border border-gray-300 px-4 py-2 text-sm">₹5,89,500.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
