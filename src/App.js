import React from 'react';
import './App.css';

import CustomerDetails from './components/CustomerDet';
import Summary from './components/Summery';
import Total from './components/total';
import DigitalSignatureUpload from './components/digiSign';
import QRCodeSection from './components/QRcode';
import Footer2 from './components/footerlast';
import Header from './components/header'; // Renamed from 'header' to 'Header'
import InvoiceDetails from './components/InvoiceDet'; // Added for consistency if needed

function App() {
  const handelPrint = () => {
    window.print();
  };

  const generatePDF = () => {
    // PDF generation logic (e.g., using jsPDF or another library)
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Header Section */}
      <Header />

      {/* Customer Details */}
      <CustomerDetails />

      {/* Summary Section */}
      <Summary />

      {/* Total Section */}
      <Total />

      {/* Digital Signature Section */}
      <DigitalSignatureUpload />

      {/* QR Code Section */}
      <QRCodeSection />

      {/* Footer Section */}
      <Footer2 />
    </div>
  );
}

export default App;
