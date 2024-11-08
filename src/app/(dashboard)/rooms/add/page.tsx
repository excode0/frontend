'use client';
import React, { useState } from 'react';
import RoomForm from './RoomForm';
import PopupMessage from '@/components/PopupMessage';

const page = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [confirmedRoomData, setConfirmedRoomData] =
    useState<Rooms | null>(null);

  const handleProductSubmit = (roomData: Rooms) => {
    showPopupWithMessage('You are assured of saving this data?', roomData);
  };

  const showPopupWithMessage = (message: string, roomData: Rooms) => {
    setPopupMessage(message);
    setConfirmedRoomData(roomData); // Simpan data produk sementara
    setIsPopupVisible(true); // Tampilkan popup
  };

  const handleConfirm = () => {
    if (confirmedRoomData) {
      console.log('Product Data:', confirmedRoomData); // Lakukan aksi dengan data produk yang dikonfirmasi
    }
    setIsPopupVisible(false);
    setConfirmedRoomData(null); // Hapus data produk setelah konfirmasi
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setIsPopupVisible(false);
    setConfirmedRoomData(null); // Hapus data produk jika dibatalkan
  };

  return (
    <div className='relative'>
      <RoomForm onSubmit={handleProductSubmit} />
      {isPopupVisible && (
        <PopupMessage
          message={popupMessage}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default page;
