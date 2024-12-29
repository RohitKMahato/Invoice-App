import React from 'react';

export default function Footer() {
  return (
    <>
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
            {/* You can add any content here */}
          </div>
        </div>
      </div>
    </>
  );
}
