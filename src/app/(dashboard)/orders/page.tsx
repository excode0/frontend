'use client';
import PopupMessage from '@/components/PopupMessage';
import { projects } from '@/data/dataDummy';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEdit, FaExclamationTriangle } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdDeleteForever, MdKeyboardArrowDown } from 'react-icons/md';
import { RiProgress3Fill } from 'react-icons/ri';

const page = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [filterMenu, setfilterMenu] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState(''); // State untuk pesan
  const [searchQuery, setSearchQuery] = useState('');
  const handleConfirm = () => {
    console.log('Confirmed!');
    setIsPopupVisible(false);
  };

  const handleCancel = () => {
    console.log('Cancelled!');
    setIsPopupVisible(false);
  };

  const showPopupWithMessage = (message: string) => {
    setPopupMessage(message); // Atur pesan popup di sini
    setIsPopupVisible(true); // Tampilkan popup
  };
  // Filter projects based on search and filter menu
  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filterMenu === '' || project.status === filterMenu;
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  return (
    <div className='w-full flex flex-col text-sm'>
      {/* ALL  ORDER */}
      <div className='flex'>
        <div className='bg-backgroundSecond/50 '>
          <div className='flex gap-5'>
            <div
              onClick={() => setfilterMenu('')}
              className={`${
                filterMenu == ''
                  ? 'bg-backgroundSecond text-text'
                  : 'text-text/50'
              } p-4  font-semibold cursor-pointer`}
            >
              <span>All</span>
            </div>
            <div
              onClick={() => setfilterMenu('progress')}
              className={`${
                filterMenu == 'progress'
                  ? 'bg-backgroundSecond text-text'
                  : 'text-text/50'
              } p-4  font-semibold cursor-pointer`}
            >
              <span>On Progress</span>
            </div>
            <div
              onClick={() => setfilterMenu('complete')}
              className={`${
                filterMenu == 'complete'
                  ? 'bg-backgroundSecond text-text'
                  : 'text-text/50'
              } p-4  font-semibold cursor-pointer`}
            >
              <span>Complete</span>
            </div>
          </div>
        </div>
      </div>
      <div className='relative overflow-x-auto shadow-md rounded-r-md bg-backgroundSecond p-2'>
        <div className='w-full flex items-center justify-between p-4 '>
          <div>
            <span>RUNNING PROJECT</span>
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

            <div className='relative'>
              <button
                onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                className='inline-flex items-center bg-backgroundSecond border border-gray-300 focus:outline-none hover:bg-background focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:border-gray-600 dark:focus:ring-gray-700'
              >
                <span className='sr-only'>Action button</span>
                Action
                <MdKeyboardArrowDown className='w-4 h-4 ml-2.5' />
              </button>

              {isOpenDropdown && (
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
          </div>
        </div>
        <table className='w-full text-sm text-left rtl:text-right  '>
          <thead className='text-xs uppercase bg-background '>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
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
                Product
              </th>
              <th scope='col' className='px-6 py-3'>
                Order Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              {/* <th scope='col' className='px-6 py-3'>
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr
                key={project.id}
                className='bg-backgroundSecond border-b hover:bg-background'
              >
                <td className='w-4 p-4'>
                  <div className='flex items-center'>
                    <input
                      id='checkbox-table-search-1'
                      type='checkbox'
                      className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
                    />
                    <label
                      htmlFor='checkbox-table-search-1'
                      className='sr-only'
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className='px-6 py-4 font-semibold'>
                  {project.name}
                  <div className='text-sm text-gray-500'>{project.email}</div>
                </td>
                <td className='px-6 py-4'>{project.role}</td>
                <td className='px-6 py-4'>{project.orderDate}</td>
                <td className='px-6 py-4'>
                  <div className='flex items-center gap-2'>
                    {project.status === 'progress' && (
                      <RiProgress3Fill className='text-orange-500' />
                    )}
                    {project.status === 'complete' && (
                      <IoIosCheckmarkCircle className='text-green-500' />
                    )}
                    {project.status === 'unconfirmed' && (
                      <FaExclamationTriangle className='text-yellow-500' />
                    )}
                    {project.status.charAt(0).toUpperCase() +
                      project.status.slice(1)}
                  </div>
                </td>
                {/* <td className='px-6 py-4'>
                  <div className='flex gap-5'>
                    <button>
                      <FaEdit
                        size={25}
                        className='text-blue-500 hover:scale-110'
                      />
                    </button>
                    <Link href={''}>
                      <MdDeleteForever
                        size={25}
                        className='text-red-600 hover:scale-110'
                      />
                    </Link>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
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
