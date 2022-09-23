import React from 'react';
import Navbar from '../Components/Navbar';
  
const AnnualReport = () => {
  return (
    <div>

    <Navbar/>
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Annual Report</h1>
    </div>
    </div>

  );
};
  
export default AnnualReport;