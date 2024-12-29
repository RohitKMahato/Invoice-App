import React, { useState } from 'react';

export default function CustomerDetails() {
  // State to manage input values
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Customer Details</h2>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
            placeholder="Rakesh Kumar Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)} // Updating state on input change
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
            placeholder="Sector 54, Gurgaon"
            value={address}
            onChange={(e) => setAddress(e.target.value)} // Updating state on input change
          />
        </div>
      </div>
      {/* Optionally, you can display the entered values below */}
      <div className="mt-4">
        <p className="text-sm text-gray-700">Entered Name: {name}</p>
        <p className="text-sm text-gray-700">Entered Address: {address}</p>
      </div>
    </div>
  );
}
