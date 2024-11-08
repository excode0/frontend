import Link from 'next/link';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
interface CustomerTableProps {
  customers: Customers[];
}
const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
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
              ID
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Email
            </th>
            <th scope='col' className='px-6 py-3'>
              Registration Date
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className='bg-backgroundSecond border-b hover:bg-background'
            >
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id={`checkbox-table-search-${customer.id}`}
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500'
                  />
                  <label
                    htmlFor={`checkbox-table-search-${customer.id}`}
                    className='sr-only'
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className='px-6 py-4'>{customer.id}</td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 whitespace-nowrap'
              >
                <div className='ps-3'>
                  <div className='text-base font-semibold'>{customer.name}</div>
                </div>
              </th>
              <td className='px-6 py-4'>{customer.email}</td>
              <td className='px-6 py-4'>{customer.registrationDate}</td>
              <td className='px-3 py-4'>
                <div className='flex'>
                  {/* <Link
                    href={`/product/edit?id=${customer.id}`}
                    className='hover:bg-blue-600 hover:bg-opacity-20 p-2 rounded-full'
                  >
                    <FaEdit
                      size={20}
                      className='text-blue-600 hover:scale-110'
                    />
                  </Link> */}
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
    </>
  );
};

export default CustomerTable;
