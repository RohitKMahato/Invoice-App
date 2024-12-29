import React from 'react';

export default function Header() {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Ishanee Villas Tech Private Limited</h1>
          <p className="text-sm text-gray-500">
            CTA252, The Crest, DLF 5, Park Drive <br />
            Gurugram, Haryana 122011, India <br />
            GSTIN: 06AAGCI9865C1ZD
          </p>
        </div>
        <div>
          <img
            src="https://www.alayastays.com/assets/images/icons/png/ogimage.png"
            alt="Logo"
            className="h-12"
          />
        </div>
      </div>
    </>
  );
}
