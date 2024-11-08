// file: customers/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import CustomerTable from './component/CustomerTable';
import { customers } from '@/data/dataDummy';

// Misalkan data pelanggan diambil dari API atau file data dummy
// interface Customer {
//   id: number;
//   name: string;
//   email: string;
//   registrationDate: string;
// }

// const fetchCustomers = async (): Promise<Customer[]> => {
//   // Contoh data statis, tetapi Anda bisa menggunakan fetch ke API jika diperlukan
//   return [
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@example.com',
//       registrationDate: '2024-01-01',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       email: 'jane@example.com',
//       registrationDate: '2024-02-15',
//     },
//     // Tambahkan data pelanggan lainnya di sini
//   ];
// };

const CustomersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [filteredCustomer, setFilteredCustomer] = useState(customers);
  useEffect(() => {
    const filterProducts = () => {
      const updatedCustomer = customers.filter((customer) => {
        const matchesSearch = customer.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesSearch;
      });
      setFilteredCustomer(updatedCustomer);
    };

    filterProducts();
  }, [searchQuery]);

  return (
    <div className='w-full flex flex-col text-sm '>
      <h1 className='text-2xl font-bold mb-4'>Registered Customers</h1>
      <div className='relative min-h-screen overflow-x-auto shadow-md rounded-r-md mt-2 bg-backgroundSecond p-2 '>
        <div className='w-full flex items-center justify-between p-4 '>
          <div>
            <span>ALL PRODUCT</span>
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
          </div>
        </div>
        <CustomerTable customers={filteredCustomer} />
      </div>
      {/* <table className='w-full text-sm text-left bg-white rounded-md shadow-lg'>
        <thead>
          <tr className='bg-gray-100 text-gray-600'>
            <th className='py-2 px-4 border'>ID</th>
            <th className='py-2 px-4 border'>Name</th>
            <th className='py-2 px-4 border'>Email</th>
            <th className='py-2 px-4 border'>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className='hover:bg-gray-50'>
              <td className='py-2 px-4 border'>{customer.id}</td>
              <td className='py-2 px-4 border'>{customer.name}</td>
              <td className='py-2 px-4 border'>{customer.email}</td>
              <td className='py-2 px-4 border'>{customer.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default CustomersPage;
