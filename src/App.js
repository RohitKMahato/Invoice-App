import logo from './logo.svg';

import './App.css';
// import jsPDF from "jspdf";


function App() {
  const handelPrint = () => {
    window.print();
  }
  const generatePDF = () => {
   

    
    // Save the PDF with a file namef
   
  };

  return (
    <>



    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Ishanee Villas Tech Private Limited</h1>
          <p className="text-sm text-gray-500">CTA252, The Crest,
DLF 5, Park Drive
Gurugram Haryana 122011
India
GSTIN 06AAGCI9865C1ZD</p>
        </div>
        <div>
          <img src="https://www.alayastays.com/assets/images/icons/png/ogimage.png" alt="Logo" className="h-12" />
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Invoice No.</label>
                <input
                 type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
                  placeholder="IVHR/24-257/76"/>
                    </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Invoice Date</label>
                     <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"/>
          </div>
        
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Terms</label>
                <input
                 type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
                  placeholder="Due on Check-in"/>
                    </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                     <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"/>
          </div>
          <div>
          <label className="block text-sm font-medium text-gray-700">Place of Supply </label>
                <input
                 type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
                  placeholder="Goa (30)"/>
                    </div>
                 
                    <div>
  <label className="block text-sm font-medium text-gray-700">Bill To</label>
  <input
    type="text"
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
    placeholder="Ishanee Villas Tech Private Limited"
  />
  <input
    type="text"
    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
    placeholder="GSTIN: 30AAGCI9865C1ZM"
  />
</div>

                 
      </div>
      {/* Customer Details */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Customer Details</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
              placeholder="Rakesh Kumar Sharma"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
              placeholder="Sector 54, Gurgaon"
            />
          </div>
        </div>
      </div>

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
          />
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <input
            type="number"
            className="w-full border-none focus:ring-0 focus:outline-none text-sm"
            placeholder="32,75,000.00"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <input
            type="number"
            className="w-full border-none focus:ring-0 focus:outline-none text-sm"
            placeholder="18"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-gray-900 text-sm">₹5,89,500.00</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-900 text-sm">₹32,75,000.00</td>
      </tr>
    </tbody>
  </table>
 {/* summery */}
  <div className="border border-gray-300 p-4 rounded-md">
  <div className="flex justify-between text-sm">
    <span>Sub Total:</span>
    <span>₹32,75,000.00</span>
  </div>
  <div className="flex justify-between text-sm mt-1">
    <span>Total Taxable Amount:</span>
    <span>₹32,75,000.00</span>
  </div>
  <div className="flex justify-between text-sm mt-1">
    <span>IGST18 (18%):</span>
    <span>₹5,89,500.00</span>
  </div>
  <div className="flex justify-between text-sm font-bold mt-2">
    <span>Total:</span>
    <span>₹38,64,500.00</span>
  </div>
  <div className="flex justify-between text-sm font-bold mt-1">
    <span>Balance Due:</span>
    <span>₹38,64,500.00</span>
  </div>

  {/* Total In Words Section */}
  <div className="mt-4">
    <p className="text-sm font-medium text-gray-700">Total In Words:</p>
    <p className="text-sm text-gray-900 mt-1">
      Indian Rupee Thirty-Eight Lakh Sixty-Four Thousand Five Hundred Only
    </p>
  </div>

  {/* Digital Signature Section */}
  <div className="mt-6 border-t border-gray-300 pt-4">
    <h3 className="text-sm font-medium">Authorized Signature</h3>
    <div className="flex items-center mt-2 space-x-4">
      {/* Signature Placeholder */}
      <div className="flex items-center justify-center border border-gray-300 rounded-md h-24 w-48 bg-gray-50">
        <span className="text-xs text-gray-400">Upload or Draw Signature</span>
      </div>
      {/* Upload Button */}
      <div>
        <label
          htmlFor="signatureUpload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Signature
        </label>
        <input
          type="file"
          id="signatureUpload"
          className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          accept="image/*"
        />
      </div>
    </div>
    <p className="text-xs text-gray-500 mt-2">
      Accepted formats: JPG, PNG. Max size: 2MB.
    </p>
  </div>
</div>


  {/* Footer Section */}
  <div className="mt-6">
    <p className="text-sm text-gray-700">
      A/c Holder’s Name: Ishanee Villas Tech Private Limited<br />
      Bank Name: ICICI Bank Limited<br />
      A/c No.: 114705001875<br />
      Branch & IFSC Code: Gurgaon Sector 57 Branch & ICIC0001147
    </p>
    <div className="mt-6 border-t border-gray-300 pt-4">
  <h3 className="text-sm font-medium">Terms & Conditions</h3>
  <ul className="text-sm text-gray-700 mt-2 space-y-1">
    <li>
      1. We declare that this invoice shows the actual price of the Services
      described and that all particulars are true and correct.
    </li>
    <li>
      2. We are registered under MSME, Registration No: UDYAM-HR-05-0060924.
    </li>
    <li>3. Subject to Goa Jurisdiction.</li>
    <li>4. Payment should be made 2 days before check-in.</li>
  </ul>
  <div className="flex items-center mt-4">
    {/* QR Code */}
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
  </div>
</div>
  </div>
</div>
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


      {/* Footer Section */}
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
        <button onClick={handelPrint} className="px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700">
          Print
        </button>
        <button className="px-6 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-700">
          Reset
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
