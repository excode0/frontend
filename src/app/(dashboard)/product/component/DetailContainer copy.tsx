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
    <div className='fixed inset-0 bg-backgroundSecond  flex justify-center items-center bg-opacity-70 z-50'>
      <div className='relative w-[80%] h-[80%] bg-background flex flex-col rounded-md overflow-y-auto p-6'>
        <div className='absolute top-4 right-4 flex justify-end'>
          <button className='text-red-600' onClick={onClose}>
            <IoIosCloseCircleOutline size={30} />
          </button>
        </div>
        <div className='text-center mb-6'>
          <img src={data.colors[0].imageUrls[0]} alt='' />
          <h2 className='text-2xl font-bold mb-2'>{data.name}</h2>
          <p className='text-gray-500'>{data.description}</p>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <h3 className='font-semibold'>Kategori</h3>
            {data.category.map((cat) => (
              <div key={cat.id} className='text-sm text-gray-700'>
                <p>{cat.name}</p>
                <p className='text-gray-400'>{cat.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className='font-semibold'>Harga</h3>
            <p className='text-sm text-gray-700'>
              Rp {data.price.toLocaleString()}
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Dimensi</h3>
            <p className='text-sm text-gray-700'>
              {data.dimensions.width} x {data.dimensions.height} x{' '}
              {data.dimensions.depth} cm
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Berat</h3>
            <p className='text-sm text-gray-700'>{data.weight} kg</p>
          </div>

          <div>
            <h3 className='font-semibold'>Material</h3>
            {data.material.map((mat) => (
              <p key={mat.id} className='text-sm text-gray-700'>
                {mat.name}
              </p>
            ))}
          </div>

          <div>
            <h3 className='font-semibold'>Warna</h3>
            {data.colors.map((color) => (
              <div key={color.hex} className='flex items-center space-x-2'>
                <div
                  className='w-4 h-4 rounded-full'
                  style={{ backgroundColor: color.hex }}
                ></div>
                <p className='text-sm text-gray-700'>{color.name}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className='font-semibold'>Stok</h3>
            <p className='text-sm text-gray-700'>{data.stockQuantity} pcs</p>
          </div>

          <div>
            <h3 className='font-semibold'>Kustomisasi</h3>
            <p className='text-sm text-gray-700'>
              {data.isCustomizable ? 'Ya' : 'Tidak'}
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Pabrikan</h3>
            <p className='text-sm text-gray-700'>{data.manufacturer}</p>
          </div>

          <div>
            <h3 className='font-semibold'>Garansi</h3>
            <p className='text-sm text-gray-700'>{data.warranty.period}</p>
            <p className='text-gray-500'>{data.warranty.coverage}</p>
          </div>

          <div>
            <h3 className='font-semibold'>Model 3D</h3>
            <a
              href={data.modelUrls}
              target='_blank'
              className='text-blue-500 underline'
            >
              Lihat Model
            </a>
          </div>

          <div>
            <h3 className='font-semibold'>Video</h3>
            <a
              href={data.videoUrls}
              target='_blank'
              className='text-blue-500 underline'
            >
              Lihat Video
            </a>
          </div>

          <div>
            <h3 className='font-semibold'>Dibuat</h3>
            <p className='text-sm text-gray-700'>
              {data.createdDate.toLocaleDateString()}
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Diperbarui</h3>
            <p className='text-sm text-gray-700'>
              {data.updatedDate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      {/* <div className='w-[80%] h-[80%] bg-background rounded-md overflow-y-auto p-6'>
        <div className='flex justify-end'>
          <button className='text-red-600' onClick={onClose}>
            <IoIosCloseCircleOutline size={30} />
          </button>
        </div>

        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold mb-2'>{data.name}</h2>
          <p className='text-gray-500'>{data.description}</p>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <h3 className='font-semibold'>Kategori</h3>
            {data.category.map((cat) => (
              <div key={cat.id} className='text-sm text-gray-700'>
                <p>{cat.name}</p>
                <p className='text-gray-400'>{cat.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className='font-semibold'>Harga</h3>
            <p className='text-sm text-gray-700'>
              Rp {data.price.toLocaleString()}
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Dimensi</h3>
            <p className='text-sm text-gray-700'>
              {data.dimensions.width} x {data.dimensions.height} x{' '}
              {data.dimensions.depth} cm
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Berat</h3>
            <p className='text-sm text-gray-700'>{data.weight} kg</p>
          </div>

          <div>
            <h3 className='font-semibold'>Material</h3>
            {data.material.map((mat) => (
              <p key={mat.id} className='text-sm text-gray-700'>
                {mat.name}
              </p>
            ))}
          </div>

          <div>
            <h3 className='font-semibold'>Warna</h3>
            {data.colors.map((color) => (
              <div key={color.hex} className='flex items-center space-x-2'>
                <div
                  className='w-4 h-4 rounded-full'
                  style={{ backgroundColor: color.hex }}
                ></div>
                <p className='text-sm text-gray-700'>{color.name}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className='font-semibold'>Stok</h3>
            <p className='text-sm text-gray-700'>{data.stockQuantity} pcs</p>
          </div>

          <div>
            <h3 className='font-semibold'>Kustomisasi</h3>
            <p className='text-sm text-gray-700'>
              {data.isCustomizable ? 'Ya' : 'Tidak'}
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Pabrikan</h3>
            <p className='text-sm text-gray-700'>{data.manufacturer}</p>
          </div>

          <div>
            <h3 className='font-semibold'>Garansi</h3>
            <p className='text-sm text-gray-700'>{data.warranty.period}</p>
            <p className='text-gray-500'>{data.warranty.coverage}</p>
          </div>

          <div>
            <h3 className='font-semibold'>Model 3D</h3>
            <a
              href={data.modelUrls}
              target='_blank'
              className='text-blue-500 underline'
            >
              Lihat Model
            </a>
          </div>

          <div>
            <h3 className='font-semibold'>Video</h3>
            <a
              href={data.videoUrls}
              target='_blank'
              className='text-blue-500 underline'
            >
              Lihat Video
            </a>
          </div>

          <div>
            <h3 className='font-semibold'>Dibuat</h3>
            <p className='text-sm text-gray-700'>
              {data.createdDate.toLocaleDateString()}
            </p>
          </div>

          <div>
            <h3 className='font-semibold'>Diperbarui</h3>
            <p className='text-sm text-gray-700'>
              {data.updatedDate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DetailContainer;
