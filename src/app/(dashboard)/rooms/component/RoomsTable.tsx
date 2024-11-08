import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Link from 'next/link';
import { BiSolidDetail } from 'react-icons/bi';
import { products, roomsProduct } from '@/data/dataDummy';
import { useState } from 'react';
import DetailContainer from './DetailContainer';

interface RoomsTableProps {
  rooms: Rooms[];
}

const RoomsTable: React.FC<RoomsTableProps> = ({ rooms }) => {
  const [idRoomDetail, setidRoomDetail] = useState<number>();
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <table className='w-full text-sm text-left rtl:text-right'>
        <thead className='text-xs uppercase bg-background'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500'
                />
                <label htmlFor='checkbox-all-search' className='sr-only'>
                  checkbox
                </label>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Description
            </th>
            <th scope='col' className='px-6 py-3'>
              Products
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr
              key={room.id}
              className='bg-backgroundSecond border-b hover:bg-background'
            >
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id={`checkbox-table-search-${room.id}`}
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500'
                  />
                  <label
                    htmlFor={`checkbox-table-search-${room.id}`}
                    className='sr-only'
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 whitespace-nowrap'
              >
                <img
                  className='w-10 h-10 rounded-md'
                  src={room.imageUrl[0] || '/docs/images/placeholder-image.jpg'}
                  alt={`${room.name} image`}
                />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>{room.name}</div>
                </div>
              </th>
              <td className='px-6 py-4'>{room.description}</td>
              <td className='px-6 py-4'>
                {roomsProduct
                  .filter((prodRoom) => prodRoom.rooms === room.id) // Filter produk berdasarkan room ID
                  .reduce(
                    (total, prodRoom) => total + prodRoom.product.length,
                    0,
                  )}{' '}
                produk
                {/* {roomsProduct
                .filter((prodRoom) => prodRoom.rooms === room.id) // Filter produk berdasarkan room ID
                .flatMap((prodRoom) =>
                  prodRoom.product.map(
                    (
                      productId, // Iterate produk array di dalam prodRoom
                    ) =>
                      products
                        .filter((prod) => prod.id === productId)
                        .map((prod) => (
                          <p key={prod.id} className='text-sm '>
                            {prod.name}
                          </p>
                        )),
                  ),
                )} */}
              </td>
              <td className='px-3 py-4'>
                <div className='flex'>
                  <button
                    className='hover:bg-gray-300 hover:bg-opacity-20 p-2 rounded-full'
                    onClick={() => {
                      setShowDetail(!showDetail), setidRoomDetail(room.id);
                    }}
                  >
                    <BiSolidDetail
                      size={20}
                      className='text-text hover:scale-110'
                    />
                  </button>
                  <Link
                    href={`/rooms/edit?id=${room.id}`}
                    className='hover:bg-blue-600 hover:bg-opacity-20 p-2 rounded-full'
                  >
                    <FaEdit
                      size={20}
                      className='text-blue-600 hover:scale-110'
                    />
                  </Link>
                  <button className='hover:bg-red-600 hover:bg-opacity-20 p-2 rounded-full'>
                    <MdDeleteForever
                      size={25}
                      className='text-red-600 hover:scale-110'
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDetail ? (
        <DetailContainer
          onClose={() => setShowDetail(!showDetail)}
          room={rooms.filter((prod) => prod.id === idRoomDetail)}
        />
      ) : null}
    </>
  );
};

export default RoomsTable;
