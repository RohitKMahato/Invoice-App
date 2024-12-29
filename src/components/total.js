import React, { useState } from 'react';
import { toWords } from 'number-to-words';  // Importing the number-to-words library

export default function Total() {
  const [amount, setAmount] = useState(0);  // State to store the amount input by the user
  const [amountInWords, setAmountInWords] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setAmount(value);

    // Convert the number to words when the user types
    if (value) {
      const words = toWords(value);  // Convert the number to words
      setAmountInWords(words.charAt(0).toUpperCase() + words.slice(1));  // Capitalize the first letter
    } else {
      setAmountInWords('');
    }
  };

  return (
    <>
      <div className="mt-4">
        <label htmlFor="amount" className="text-sm font-medium text-gray-700">
          Enter Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleChange}
          className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700">Total In Words:</p>
        <p className="text-sm text-gray-900 mt-1">
          {amountInWords ? `${amountInWords} Only` : ''}
        </p>
      </div>
    </>
  );
}
