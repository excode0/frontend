import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Link from 'next/link';

interface ProductTableProps {
  products: Product[];
}
const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
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
        {products.map((product) => (
          <tr
            key={product.id}
            className='bg-backgroundSecond border-b hover:bg-background'
          >
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input
                  id={`checkbox-table-search-${product.id}`}
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-background border-gray-300 rounded focus:ring-blue-500'
                />
                <label
                  htmlFor={`checkbox-table-search-${product.id}`}
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
                className='w-10 h-10 rounded-full'
                src={
                  product.colors[0]?.imageUrls[0] ||
                  '/docs/images/placeholder-image.jpg'
                }
                alt={`${product.name} image`}
              />
              <div className='ps-3'>
                <div className='text-base font-semibold'>{product.name}</div>
                <div className='font-normal'>{product.manufacturer}</div>
              </div>
            </th>
            <td className='px-6 py-4'>{product.description}</td>
            <td className='px-6 py-4'>
              <div className='flex items-center'>
                <div
                  className={`h-2.5 w-2.5 rounded-full me-2 ${
                    product.stockQuantity > 0 ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></div>
                {product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
              </div>
            </td>
            <td className='px-3 py-4'>
              <div className='flex'>
                <Link
                  href={`/product/edit-product/${product.id}`}
                  className='hover:bg-blue-600 hover:bg-opacity-20 p-2 rounded-full'
                >
                  <FaEdit size={25} className='text-blue-600 hover:scale-110' />
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
  );
};

export default ProductTable;
