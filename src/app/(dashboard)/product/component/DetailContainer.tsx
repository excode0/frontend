import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface DetailContainerProps {
  onClose: () => void;
  product: Product[];
}

const DetailContainer: React.FC<DetailContainerProps> = ({
  onClose,
  product,
}) => {
  const data = product[0];
  return (
    <div className='fixed w-full h-screen inset-0 bg-backgroundSecond flex justify-center items-center bg-opacity-70 z-50'>
      <div className='relative w-[80%] h-[80%] bg-background flex flex-col rounded-md overflow-hidden p-6 shadow-lg'>
        {/* Tombol Close */}

        {/* Konten Utama */}
        <div className='overflow-y-auto h-full pr-4'>
          {/* Header */}
          <div className='grid grid-cols-2 text-center mb-6'>
            <div className='w-full h-full'>
              <img
                src={data.colors[0].imageUrls[0]}
                alt=''
                className='w-full h-full mx-auto rounded-md shadow-md object-cover'
              />
            </div>
            <div className='flex flex-col justify-start items-start text-start py-2 px-4'>
              <h2 className='text-3xl font-bold'>{data.name}</h2>
              <p className=' text-sm mt-2'>{data.description}</p>
            </div>
          </div>

          {/* Detail */}
          <div className='grid grid-cols-2 gap-6 text-text'>
            {/* Kategori */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Kategori</h3>
              {data.category.map((cat) => (
                <div key={cat.id} className='mb-1'>
                  <p className='font-medium'>{cat.name}</p>
                  <p className=' text-sm'>{cat.description}</p>
                </div>
              ))}
            </div>

            {/* Harga */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Harga</h3>
              <p className='text-xl font-medium'>
                Rp {data.price.toLocaleString()}
              </p>
            </div>

            {/* Dimensi */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Dimensi</h3>
              <p className='text-sm'>
                {data.dimensions.width} x {data.dimensions.height} x{' '}
                {data.dimensions.depth} cm
              </p>
            </div>

            {/* Berat */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Berat</h3>
              <p className='text-sm'>{data.weight} kg</p>
            </div>

            {/* Material */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Material</h3>
              {data.material.map((mat) => (
                <p key={mat.id} className='text-sm'>
                  {mat.name}
                </p>
              ))}
            </div>

            {/* Warna */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Warna</h3>
              {data.colors.map((color) => (
                <div key={color.hex} className='flex items-center mb-1'>
                  <div
                    className='w-4 h-4 rounded-full mr-2'
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <p className='text-sm'>{color.name}</p>
                </div>
              ))}
            </div>

            {/* Stok */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Stok</h3>
              <p className='text-sm'>{data.stockQuantity} pcs</p>
            </div>

            {/* Kustomisasi */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Kustomisasi</h3>
              <p className='text-sm'>{data.isCustomizable ? 'Ya' : 'Tidak'}</p>
            </div>

            {/* Pabrikan */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Pabrikan</h3>
              <p className='text-sm'>{data.manufacturer}</p>
            </div>

            {/* Garansi */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Garansi</h3>
              <p className='text-sm'>{data.warranty.period}</p>
              <p className=' text-sm'>{data.warranty.coverage}</p>
            </div>

            {/* Model 3D */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Model 3D</h3>
              <a
                href={data.modelUrls}
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
                href={data.videoUrls}
                target='_blank'
                className='text-blue-500 underline text-sm'
              >
                Lihat Video
              </a>
            </div>

            {/* Tanggal Pembuatan */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Dibuat</h3>
              <p className='text-sm'>
                {new Date(data.createdDate).toLocaleDateString()}
              </p>
            </div>

            {/* Tanggal Pembaruan */}
            <div className='border-t border-foreground pt-4'>
              <h3 className='font-semibold text-lg mb-2'>Diperbarui</h3>
              <p className='text-sm'>
                {new Date(data.updatedDate).toLocaleDateString()}
              </p>
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
  );
};

export default DetailContainer;
