import React from 'react';

export default function Footer2() {
  const generatePDF = () => {
    // Add logic for generating a PDF
    console.log("PDF generated");
  };

  const handlePrint = () => {
    // Add logic for printing
    console.log("Printing...");
  };

  return (
    <>
     
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Notes</h2>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
          placeholder="Add any notes here..."
        ></textarea>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button onClick={generatePDF} className="px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700">
          Save Invoice
        </button>
        <button onClick={handlePrint} className="px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700">
          Print
        </button>
        <button className="px-6 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-700">
          Reset
        </button>
      </div>
    </>
  );
}
