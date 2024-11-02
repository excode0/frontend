'use client';

import React, { useState } from 'react';

interface PopupMessageProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const PopupMessage: React.FC<PopupMessageProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-backgroundSecond bg-opacity-70 z-50'>
      <div className='bg-backgroundSecond p-6 rounded-xl shadow-lg w-80'>
        <p className='text-center text-lg font-medium'>{message}</p>
        <div className='flex justify-around mt-6'>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-blue-500 text-text rounded-lg hover:bg-blue-600 focus:outline-none'
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className='px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
