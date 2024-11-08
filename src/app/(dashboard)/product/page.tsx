'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSolidFileExport } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { IoFilterOutline } from 'react-icons/io5';
import { MdDeleteForever, MdKeyboardArrowDown } from 'react-icons/md';
import ProductTable from './component/ProductTable';
import { categories, materials, products } from '@/data/dataDummy';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import PopupMessage from '@/components/PopupMessage';

const page = () => {
  const [isOpenDropdownAction, setIsOpenDropdownAction] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isFilterCategoryDropdown, setIsFilterCategoryDropdown] =
    useState(false);
  const [isFilterMaterialDropdown, setIsFilterMaterialDropdown] =
    useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Number[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<Number[]>([]);
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
  const handleCategoryToggle = (categoryId: number) => {
    setSelectedCategories(
      (prevSelected) =>
        prevSelected.includes(categoryId)
          ? prevSelected.filter((id) => id !== categoryId) // Hapus jika sudah dipilih
          : [...prevSelected, categoryId], // Tambah jika belum dipilih
    );
  };

  const handleMaterialToggle = (materialId: number) => {
    setSelectedMaterial(
      (prevSelected) =>
        prevSelected.includes(materialId)
          ? prevSelected.filter((id) => id !== materialId) // Hapus jika sudah dipilih
          : [...prevSelected, materialId], // Tambah jika belum dipilih
    );
  };
  const showPopupWithMessage = (message: string) => {
    setPopupMessage(message); // Atur pesan popup di sini
    setIsPopupVisible(true); // Tampilkan popup
  };

  const [filteredProduct, setFilteredProduct] = useState(products);
  useEffect(() => {
    const filterProducts = () => {
      const updatedProducts = products.filter((product) => {
        const matchesCategory =
          selectedCategories.length === 0 ||
          product.category.some((cat) => selectedCategories.includes(cat.id));
        const matchesMaterial =
          selectedMaterial.length === 0 ||
          product.material.some((mat) => selectedMaterial.includes(mat.id));
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch && matchesMaterial;
      });
      setFilteredProduct(updatedProducts);
    };

    filterProducts();
  }, [selectedCategories, searchQuery, selectedMaterial]);
  return (
    <div className='w-full flex flex-col text-sm '>
      {/* ALL  PRODUCT */}
      <div className='flex justify-end'>
        <div className='flex gap-5'>
          <div className='flex gap-2 items-center bg-backgroundSecond px-4 py-2 text-text font-semibold rounded-md'>
            <BiSolidFileExport size={20} />
            <span>Export</span>
          </div>
          <Link
            href={'/product/add'}
            className='flex gap-2 items-center bg-backgroundSecond px-4 py-2 text-text font-semibold rounded-md'
          >
            <IoIosAddCircle size={20} />
            <span>Add Product</span>
          </Link>
        </div>
      </div>
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
                            setIsFilterCategoryDropdown(
                              !isFilterCategoryDropdown,
                            )
                          }
                          className='w-full flex justify-between text-start  px-4 py-2 hover:bg-background'
                        >
                          <span>Category</span>
                          {isFilterCategoryDropdown ? (
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
                      {isFilterCategoryDropdown ? (
                        <li className='max-h-40 overflow-y-auto'>
                          {categories
                            ? categories.map((category) => (
                                <label
                                  key={category.id}
                                  className='flex items-center space-x-2'
                                >
                                  <input
                                    type='checkbox'
                                    checked={selectedCategories.includes(
                                      category.id,
                                    )}
                                    onChange={() =>
                                      handleCategoryToggle(category.id)
                                    }
                                    className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                                  />
                                  <span className='text-sm'>
                                    {category.name}
                                  </span>
                                </label>
                              ))
                            : null}
                        </li>
                      ) : null}
                    </ul>
                    <ul
                      className='py-1 text-sm'
                      aria-labelledby='dropdownActionButton'
                    >
                      <li>
                        <button
                          onClick={() =>
                            setIsFilterMaterialDropdown(
                              !isFilterMaterialDropdown,
                            )
                          }
                          className='w-full flex justify-between text-start  px-4 py-2 hover:bg-background'
                        >
                          <span>Materials</span>
                          {isFilterMaterialDropdown ? (
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
                      {isFilterMaterialDropdown ? (
                        <li className='max-h-40 overflow-y-auto'>
                          {materials
                            ? materials.map((material) => (
                                <label
                                  key={material.id}
                                  className='flex items-center space-x-2'
                                >
                                  <input
                                    type='checkbox'
                                    checked={selectedMaterial.includes(
                                      material.id,
                                    )}
                                    onChange={() =>
                                      handleMaterialToggle(material.id)
                                    }
                                    className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                                  />
                                  <span className='text-sm'>
                                    {material.name}
                                  </span>
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
        <ProductTable products={filteredProduct} />
        {/* <table className='w-full text-sm text-left rtl:text-right  '>
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
              <td className='px-3 py-4'>
                <div className='flex'>
                  <Link
                    href={'/product/edit-product'}
                    className='hover:bg-blue-600 hover:bg-opacity-20 p-2 rounded-full'
                  >
                    <FaEdit
                      size={25}
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
          </tbody>
        </table> */}
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
