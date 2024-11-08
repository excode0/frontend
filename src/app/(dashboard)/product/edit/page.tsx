// file: product/edit/page.tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import ProductEditForm from './ProductEditForm';
import { useEffect, useState } from 'react';
import { products } from '@/data/dataDummy'; // Misalnya data produk dummy ada di sini
import PopupMessage from '@/components/PopupMessage';

const Page = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const [productData, setProductData] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (productId) {
      // Contoh: cari data produk dari array data dummy berdasarkan productId
      const product = products.find((prod) => prod.id === parseInt(productId));
      setProductData(product || null);
    }
  }, [productId]);

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
    router.push('/product');
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setIsPopupVisible(false);
    setConfirmedProductData(null); // Hapus data produk jika dibatalkan
  };
  if (!productData) return <div>Loading...</div>;

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Edit Product</h1>
      <ProductEditForm
        initialData={productData}
        onSubmit={handleProductSubmit}
      />
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

export default Page;
