'use client';
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import PopupMessage from '@/components/PopupMessage';

const page = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [confirmedProductData, setConfirmedProductData] =
    useState<Product | null>(null);

  const handleProductSubmit = (productData: Product) => {
    showPopupWithMessage('You are assured of saving this data?', productData);
  };

  const showPopupWithMessage = (message: string, productData: Product) => {
    setPopupMessage(message);
    setConfirmedProductData(productData); // Simpan data produk sementara
    setIsPopupVisible(true); // Tampilkan popup
  };

  const handleConfirm = () => {
    if (confirmedProductData) {
      console.log('Product Data:', confirmedProductData); // Lakukan aksi dengan data produk yang dikonfirmasi
    }
    setIsPopupVisible(false);
    setConfirmedProductData(null); // Hapus data produk setelah konfirmasi
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setIsPopupVisible(false);
    setConfirmedProductData(null); // Hapus data produk jika dibatalkan
  };

  return (
    <div className='relative'>
      <ProductForm onSubmit={handleProductSubmit} />
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
