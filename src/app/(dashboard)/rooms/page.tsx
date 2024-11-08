'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSolidFileExport } from 'react-icons/bi';
import { IoIosAddCircle } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ProductTable from './component/RoomsTable';
import { rooms, styleRooms } from '@/data/dataDummy';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import PopupMessage from '@/components/PopupMessage';

const page = () => {
  const [isOpenDropdownAction, setIsOpenDropdownAction] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isFilterStyleDropdown, setIsFilterStyleDropdown] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<Number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState(''); // State untuk pesan
  const handleConfirm = () => {
    console.log('Confirmed!');
    setIsPopupVisible(false);
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setIsPopupVisible(false);
  };
  const handleStyleToggle = (styleId: number) => {
    setSelectedStyle(
      (prevSelected) =>
        prevSelected.includes(styleId)
          ? prevSelected.filter((id) => id !== styleId) // Hapus jika sudah dipilih
          : [...prevSelected, styleId], // Tambah jika belum dipilih
    );
  };

  const showPopupWithMessage = (message: string) => {
    setPopupMessage(message); // Atur pesan popup di sini
    setIsPopupVisible(true); // Tampilkan popup
  };

  const [filteredRooms, setFilteredRooms] = useState(rooms);
  useEffect(() => {
    const filterProducts = () => {
      const updatedProducts = rooms.filter((room) => {
        const matchesCategory =
          selectedStyle.length === 0 ||
          room.style.some((cat) => selectedStyle.includes(cat.id));

        const matchesSearch = room.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
      setFilteredRooms(updatedProducts);
    };

    filterProducts();
  }, [selectedStyle, searchQuery]);
  return (
    <div className='w-full flex flex-col text-sm '>
      {/* ALL  Rooms */}
      <div className='flex justify-end'>
        <div className='flex gap-5'>
          <div className='flex gap-2 items-center bg-backgroundSecond px-4 py-2 text-text font-semibold rounded-md'>
            <BiSolidFileExport size={20} />
            <span>Export</span>
          </div>
          <Link
            href={'/rooms/add'}
            className='flex gap-2 items-center bg-backgroundSecond px-4 py-2 text-text font-semibold rounded-md'
          >
            <IoIosAddCircle size={20} />
            <span>Add Room</span>
          </Link>
        </div>
      </div>
      <div className='relative min-h-screen overflow-x-auto shadow-md rounded-r-md mt-2 bg-backgroundSecond p-2 '>
        <div className='w-full flex items-center justify-between p-4 '>
          <div>
            <span>ALL Room</span>
          </div>
          <div className='flex gap-5'>
            <div className='bg-background'>
              <label htmlFor='table-search' className='sr-only'>
                Search
              </label>
              <div className='relative mt-1'>
                <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='text'
                  id='table-search'
                  className='block p-2 ps-10 text-sm border border-gray-300 rounded-lg w-80 bg-background focus:ring-blue-500 focus:border-blue-500 '
                  placeholder='Search for Order'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className='flex gap-2'>
              <div className='relative'>
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className='inline-flex items-center bg-backgroundSecond border border-gray-300 focus:outline-none hover:bg-background focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:border-gray-600 dark:focus:ring-gray-700'
                >
                  <span className='sr-only'>Filter</span>
                  Filter
                  <MdKeyboardArrowDown className='w-4 h-4 ml-2.5' />
                </button>

                {isFilterDropdownOpen && (
                  <div className='absolute right-0 z-10 mt-2 bg-backgroundSecond divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600'>
                    <ul
                      className='py-1 text-sm'
                      aria-labelledby='dropdownActionButton'
                    >
                      <li>
                        <button
                          onClick={() =>
                            setIsFilterStyleDropdown(!isFilterStyleDropdown)
                          }
                          className='w-full flex justify-between text-start  px-4 py-2 hover:bg-background'
                        >
                          <span>Style</span>
                          {isFilterStyleDropdown ? (
                            <CiSquareMinus
                              size={25}
                              className='text-foreground'
                            />
                          ) : (
                            <CiSquarePlus
                              size={25}
                              className='text-foreground'
                            />
                          )}
                        </button>
                      </li>
                      {isFilterStyleDropdown ? (
                        <li className='max-h-40 overflow-y-auto'>
                          {styleRooms
                            ? styleRooms.map((style) => (
                                <label
                                  key={style.id}
                                  className='flex items-center space-x-2'
                                >
                                  <input
                                    type='checkbox'
                                    checked={selectedStyle.includes(style.id)}
                                    onChange={() => handleStyleToggle(style.id)}
                                    className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                                  />
                                  <span className='text-sm'>{style.name}</span>
                                </label>
                              ))
                            : null}
                        </li>
                      ) : null}
                    </ul>
                  </div>
                )}
              </div>
              <div className='relative'>
                <button
                  onClick={() => setIsOpenDropdownAction(!isOpenDropdownAction)}
                  className='inline-flex items-center bg-backgroundSecond border border-gray-300 focus:outline-none hover:bg-background focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:border-gray-600 dark:focus:ring-gray-700'
                >
                  <span className='sr-only'>Action button</span>
                  Action
                  <MdKeyboardArrowDown className='w-4 h-4 ml-2.5' />
                </button>

                {isOpenDropdownAction && (
                  <div className='absolute right-0 z-10 mt-2 bg-backgroundSecond divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600'>
                    <ul
                      className='py-1 text-sm'
                      aria-labelledby='dropdownActionButton'
                    >
                      <li>
                        <button
                          onClick={() => {
                            showPopupWithMessage(
                              'Are you sure you want to change complete?',
                            );
                          }}
                          className='w-full text-start block px-4 py-2 hover:bg-background'
                        >
                          Complete
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            showPopupWithMessage(
                              'Are you sure you want to change Progress?',
                            );
                          }}
                          className='w-full text-start block px-4 py-2 hover:bg-background'
                        >
                          Progress
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            showPopupWithMessage(
                              'Are you sure you want to change Unconfirmed?',
                            );
                          }}
                          className='w-full text-start block px-4 py-2 hover:bg-background'
                        >
                          Unconfirmed
                        </button>
                      </li>
                    </ul>
                    <div className='py-1'>
                      <button
                        onClick={() => {
                          showPopupWithMessage(
                            'Are you sure you want to continue delete?',
                          );
                        }}
                        className='w-full text-start block px-4 py-2 text-sm hover:bg-background'
                      >
                        Delete Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                id='dropdownAction'
                className='z-10 hidden bg-backgroundSecond divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-600'
              >
                <ul
                  className='py-1 text-sm  '
                  aria-labelledby='dropdownActionButton'
                >
                  <li>
                    <a href='#' className='block px-4 py-2 hover:bg-background'>
                      Reward
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-4 py-2 hover:bg-background'>
                      Promote
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block px-4 py-2 hover:bg-background'>
                      Activate account
                    </a>
                  </li>
                </ul>
                <div className='py-1'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm  hover:bg-background'
                  >
                    Delete User
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductTable rooms={filteredRooms} />
      </div>
      {/* MESSAGE */}
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
