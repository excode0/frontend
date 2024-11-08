import { products, roomsProduct } from '@/data/dataDummy';
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
interface DetailContainerProps {
  onClose: () => void;
  room: Rooms[];
}

const DetailContainer: React.FC<DetailContainerProps> = ({ onClose, room }) => {
  const data = room[0];
  return (
    <>
      <div className='fixed w-full h-screen inset-0 bg-backgroundSecond flex justify-center items-center bg-opacity-70 z-50'>
        <div className='relative w-[80%] h-[80%] bg-background flex flex-col rounded-md overflow-hidden p-6 shadow-lg'>
          {/* Tombol Close */}

          {/* Konten Utama */}
          <div className='overflow-y-auto h-full pr-4'>
            {/* Header */}
            <div className='grid grid-cols-2 text-center mb-6'>
              <div className='w-full h-full'>
                <img
                  src={data.imageUrl[0]}
                  alt=''
                  className='w-full h-full mx-auto rounded-md shadow-md object-cover'
                />
              </div>
              <div className='flex flex-col justify-start items-start text-start py-2 px-4'>
                <h2 className='text-3xl font-bold'>{data.name}</h2>
                <p className=' text-sm mt-2'>{data.description}</p>
                <div className='mt-5'>
                  <h3 className='font-semibold text-lg mb-2'>Kategori</h3>
                  <div className='flex gap-5'>
                    {data.style.map((st) => (
                      <div key={st.id}>
                        <p className='font-medium'>{st.name}</p>
                        {/* <p className=' text-sm'>{st.description}</p> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detail */}
            <div className='grid grid-cols-2 gap-6 text-text'>
              <div className='border-t border-foreground pt-4'>
                <h3 className='font-semibold text-lg mb-2'>Model 3D</h3>
                <a
                  href={data.modelUrl}
                  target='_blank'
                  className='text-blue-500 underline text-sm'
                >
                  Lihat Model
                </a>
              </div>
              {/* Video */}
              <div className='border-t border-foreground pt-4'>
                <h3 className='font-semibold text-lg mb-2'>Video</h3>
                <a
                  href={data.videoUrl}
                  target='_blank'
                  className='text-blue-500 underline text-sm'
                >
                  Lihat Video
                </a>
              </div>
              {/* PRODUCT IN ROOM */}
            </div>
            {/* PRODUCT IN ROOM */}
            <div className='flex flex-col gap-4 mt-10'>
              <h2 className='text-xl font-semibold mb-3'>Produk di Ruangan</h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                {roomsProduct
                  .filter((prodRoom) => prodRoom.rooms === data.id)
                  .flatMap((prodRoom) =>
                    prodRoom.product.map((productId) =>
                      products
                        .filter((prod) => prod.id === productId)
                        .map((prod) => (
                          <div
                            key={prod.id}
                            className='flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200'
                          >
                            <img
                              src={
                                prod.colors[0].imageUrls[0] ||
                                '/placeholder-image.jpg'
                              }
                              alt={prod.name}
                              className='w-full h-full object-cover rounded-md mb-3'
                            />
                            <p className='font-medium text-center text-sm'>
                              {prod.name}
                            </p>
                          </div>
                        )),
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-[80%]'>
          <button
            className='group bg-red-600 text-white p-2 z-50 rounded-md'
            onClick={onClose}
          >
            <IoIosCloseCircleOutline
              size={30}
              className='group-hover:scale-110'
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailContainer;
