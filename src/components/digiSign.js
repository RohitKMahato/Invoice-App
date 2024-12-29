import React from 'react';

export default function DigitalSignatureUpload() {
  return (
    <>
      {/* Upload Button for Digital Signature */}
      <div>
        <label
          htmlFor="dscUpload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Digital Signature Certificate (DSC)
        </label>
        <input
          type="file"
          id="dscUpload"
          className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          accept=".pfx,.p12"  // Accepted DSC file types
        />
      </div>
      
      <p className="text-xs text-gray-500 mt-2">
        Accepted formats: PFX, P12. Max size: 5MB.
      </p>
    </>
  );
}
