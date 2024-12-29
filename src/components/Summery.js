import React from 'react';

export default function Summary() {
  const subTotal = 3275000.00;
  const totalTaxableAmount = 3275000.00;
  const igst = 589500.00;
  const total = subTotal + igst;
  const balanceDue = total;

  return (
    <>
      {/* Summary Section */}
      <div className="border border-gray-300 p-4 rounded-md">
        <div className="flex justify-between text-sm">
          <span>Sub Total:</span>
          <span>₹{subTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>Total Taxable Amount:</span>
          <span>₹{totalTaxableAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>IGST18 (18%):</span>
          <span>₹{igst.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm font-bold mt-2">
          <span>Total:</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm font-bold mt-1">
          <span>Balance Due:</span>
          <span>₹{balanceDue.toLocaleString()}</span>
        </div>
      </div>
    </>
  );
}
