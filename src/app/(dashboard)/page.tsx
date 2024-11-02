'use client';
import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

const page = () => {
  const salesData = {
    totalSales: 6000,
    productCount: 10,
  };

  // Data for Bar Chart
  const barChartData = {
    labels: ['Sales Amount', 'Product Count'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [salesData.totalSales, salesData.productCount],
        backgroundColor: ['#4caf50', '#ff9800'],
        borderColor: ['#388e3c', '#f57c00'],
        borderWidth: 1,
      },
    ],
  };

  // Data for Doughnut Chart (for Order Month)
  const doughnutChartData = {
    labels: ['Products Sold', 'Remaining Stock'],
    datasets: [
      {
        data: [10, 90], // Example data for sold vs remaining
        backgroundColor: ['#3b82f6', '#e5e7eb'],
        hoverBackgroundColor: ['#2563eb', '#d1d5db'],
      },
    ],
  };

  return (
    <div className='w-full flex flex-col text-sm'>
      <div className='w-full grid grid-cols-3 gap-5'>
        {/* Sales Month */}
        <div className='bg-backgroundSecond grid grid-cols-2 rounded-md p-5'>
          <div className='flex flex-col gap-2'>
            <span className='text-xl '>SALES MONTH</span>
            <span className='text-2xl  mt-5'>$6000</span>
            <div>
              <span className='text-xs bg-background p-2 rounded-full '>
                10 product
              </span>
            </div>
          </div>
          <div className='h-40'>
            <Bar
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>
        </div>

        {/* Order Month */}
        <div className='bg-backgroundSecond grid grid-cols-2 rounded-md p-5'>
          <div className='flex flex-col gap-2'>
            <span className='text-xl '>ORDER MONTH</span>
            <span className='text-2xl  mt-5'>10</span>
            <div>
              <span className='text-xs bg-background p-2 rounded-full '>
                10 product
              </span>
            </div>
          </div>
          <div className='h-40'>
            <Doughnut
              data={doughnutChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>

        {/* Complete Project */}
        <div className='bg-backgroundSecond rounded-md p-5 flex items-center justify-center'>
          <span className=' text-lg'>COMPLETE PROJECT</span>
        </div>
      </div>
      {/* RUNNING PROJECT */}
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-10 bg-backgroundSecond p-4'>
        <div className='w-full flex items-center justify-between p-4 '>
          <div>
            <span>RUNNING PROJECT</span>
          </div>
          <div>
            <button
              id='dropdownActionButton'
              data-dropdown-toggle='dropdownAction'
              className='inline-flex items-center  bg-backgroundSecond border border-gray-300 focus:outline-none hover:bg-background focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5  dark:border-gray-600 dark:hover: dark:hover:border-gray-600 dark:focus:ring-gray-700'
              type='button'
            >
              <span className='sr-only'>Action button</span>
              Action
              <svg
                className='w-2.5 h-2.5 ms-2.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 4 4 4-4'
                />
              </svg>
            </button>
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
        <table className='w-full text-sm text-left rtl:text-right'>
          <thead className='text-xs uppercase bg-background'>
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
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-backgroundSecond border-b  hover:bg-background '>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
                  />
                  <label htmlFor='checkbox-table-search-1' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4  whitespace-nowrap dark:'
              >
                <img
                  className='w-10 h-10 rounded-full'
                  src='/docs/images/people/profile-picture-1.jpg'
                  alt='Jese image'
                />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>Neil Sims</div>
                  <div className='font-normal '>neil.sims@flowbite.com</div>
                </div>
              </th>
              <td className='px-6 py-4'>React Developer</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500 me-2'></div>{' '}
                  Online
                </div>
              </td>
              <td className='px-6 py-4'>
                <a
                  href='#'
                  type='button'
                  data-modal-target='editUserModal'
                  data-modal-show='editUserModal'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className='bg-backgroundSecond border-b  hover:bg-background '>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-table-search-2'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
                  />
                  <label htmlFor='checkbox-table-search-2' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 font-medium  whitespace-nowrap dark:'
              >
                <img
                  className='w-10 h-10 rounded-full'
                  src='/docs/images/people/profile-picture-3.jpg'
                  alt='Jese image'
                />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>Bonnie Green</div>
                  <div className='font-normal '>bonnie@flowbite.com</div>
                </div>
              </th>
              <td className='px-6 py-4'>Designer</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500 me-2'></div>{' '}
                  Online
                </div>
              </td>
              <td className='px-6 py-4'>
                <a
                  href='#'
                  type='button'
                  data-modal-show='editUserModal'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className='bg-backgroundSecond border-b  hover:bg-background '>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-table-search-2'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
                  />
                  <label htmlFor='checkbox-table-search-2' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 font-medium  whitespace-nowrap dark:'
              >
                <img
                  className='w-10 h-10 rounded-full'
                  src='/docs/images/people/profile-picture-2.jpg'
                  alt='Jese image'
                />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>Jese Leos</div>
                  <div className='font-normal '>jese@flowbite.com</div>
                </div>
              </th>
              <td className='px-6 py-4'>Vue JS Developer</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500 me-2'></div>{' '}
                  Online
                </div>
              </td>
              <td className='px-6 py-4'>
                <a
                  href='#'
                  type='button'
                  data-modal-show='editUserModal'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className='bg-backgroundSecond border-b  hover:bg-background '>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-table-search-2'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
                  />
                  <label htmlFor='checkbox-table-search-2' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 font-medium  whitespace-nowrap dark:'
              >
                <img
                  className='w-10 h-10 rounded-full'
                  src='/docs/images/people/profile-picture-5.jpg'
                  alt='Jese image'
                />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>Thomas Lean</div>
                  <div className='font-normal '>thomes@flowbite.com</div>
                </div>
              </th>
              <td className='px-6 py-4'>UI/UX Engineer</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-500 me-2'></div>{' '}
                  Online
                </div>
              </td>
              <td className='px-6 py-4'>
                <a
                  href='#'
                  type='button'
                  data-modal-show='editUserModal'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className='bg-backgroundSecond hover:bg-background '>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-table-search-3'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
                  />
                  <label htmlFor='checkbox-table-search-3' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 font-medium  whitespace-nowrap dark:'
              >
                <img
                  className='w-10 h-10 rounded-full'
                  src='/docs/images/people/profile-picture-4.jpg'
                  alt='Jese image'
                />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>
                    Leslie Livingston
                  </div>
                  <div className='font-normal '>leslie@flowbite.com</div>
                </div>
              </th>
              <td className='px-6 py-4'>SEO Specialist</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-red-500 me-2'></div>{' '}
                  Offline
                </div>
              </td>
              <td className='px-6 py-4'>
                <a
                  href='#'
                  type='button'
                  data-modal-show='editUserModal'
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Edit user
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
