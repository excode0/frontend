// file: Room/edit/page.tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { rooms } from '@/data/dataDummy'; // Misalnya data produk dummy ada di sini
import PopupMessage from '@/components/PopupMessage';
import RoomEditForm from './RoomEditForm';

const Page = () => {
  const searchParams = useSearchParams();
  const roomID = searchParams.get('id');
  const [roomData, setroomData] = useState<Rooms | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (roomID) {
      // Contoh: cari data produk dari array data dummy berdasarkan roomID
      const room = rooms.find((rm) => rm.id === parseInt(roomID));
      setroomData(room || null);
    }
  }, [roomID]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [confirmedRoomData, setConfirmedRoomData] = useState<Rooms | null>(
    null,
  );

  const handleRoomSubmit = (roomData: Rooms) => {
    showPopupWithMessage('You are assured of saving this data?', roomData);
  };

  const showPopupWithMessage = (message: string, roomData: Rooms) => {
    setPopupMessage(message);
    setConfirmedRoomData(roomData); // Simpan data produk sementara
    setIsPopupVisible(true); // Tampilkan popup
  };

  const handleConfirm = () => {
    if (confirmedRoomData) {
      console.log('Room Data:', confirmedRoomData); // Lakukan aksi dengan data produk yang dikonfirmasi
    }
    setIsPopupVisible(false);
    setConfirmedRoomData(null); // Hapus data produk setelah konfirmasi
    router.push('/rooms');
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setIsPopupVisible(false);
    setConfirmedRoomData(null); // Hapus data produk jika dibatalkan
  };
  if (!roomData) return <div>Loading...</div>;

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Edit Room</h1>
      <RoomEditForm initialData={roomData} onSubmit={handleRoomSubmit} />
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
