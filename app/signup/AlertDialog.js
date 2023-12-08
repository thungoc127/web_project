import React, { useState } from 'react';

const AlertDialog = ({ isOpen, onClose, content }) => {
  return (
    <div
    className="flex items-center justify-center"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '40px', // Increased padding for a larger size
        background: '#F0F0F0', // Changed background color
        borderRadius: '12px', // Increased border radius
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)', // Adjusted box shadow
        display: isOpen ? 'block' : 'none',
      }}
    >
      <p className='text-black'>{content}</p>
      <button
      className="mt-5"
        onClick={onClose}
        style={{
          background: '#DC8686', // Changed close button background color
          color: 'white', // Changed close button text color
          padding: '10px 20px', // Adjusted close button padding
          borderRadius: '8px', // Increased close button border radius
          border: 'none', // Removed close button border
          cursor: 'pointer', // Added cursor pointer
        }}
      >
        Close
      </button>
    </div>
  );
};

export default AlertDialog;

