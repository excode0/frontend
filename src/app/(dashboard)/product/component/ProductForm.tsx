'use client';
import { categories, ColorsData, materials } from '@/data/dataDummy';
import clsx from 'clsx';
import React, { useState } from 'react';
import Select, { MultiValue, StylesConfig } from 'react-select';

interface ProductFormProps {
  onSubmit: (data: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const initialData: Product = {
    id: 0,
    name: '',
    description: '',
    category: [],
    price: 0,
    dimensions: {
      width: 0,
      height: 0,
      depth: 0,
    },
    weight: 0,
    material: [],
    colors: [
      {
        name: '',
        hex: '',
        imageUrls: [],
      },
    ],
    stockQuantity: 0,
    isCustomizable: false,
    manufacturer: '',
    warranty: {
      period: '',
      coverage: '',
    },
    modelUrls: '',
    videoUrls: '',
    createdDate: new Date(),
    updatedDate: new Date(),
  };

  const [formData, setFormData] = useState<Product>(initialData);
  // Convert categories to options that can be used in react-select
  const categoryOptions = categories.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  const handleCategoryChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>,
  ) => {
    const selectedCategories = categories.filter((category) =>
      selectedOptions.map((option) => option.value).includes(category.name),
    );

    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategories,
    }));
  };
  // Convert materials to options that can be used in react-select
  const materialOptions = materials.map((material) => ({
    value: material.name,
    label: material.name,
  }));

  const handleMaterialChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>,
  ) => {
    const selectedMaterials = materials.filter((material) =>
      selectedOptions.map((option) => option.value).includes(material.name),
    );

    setFormData((prevData) => ({
      ...prevData,
      material: selectedMaterials,
    }));
  };
  //   Color Option
  const colorOptions = ColorsData.map((color) => ({
    value: color.name,
    label: color.name,
    hex: color.hex,
  }));
  const handleColorChange = (selectedColors: any) => {
    setFormData((prevData) => ({
      ...prevData,
      colors: selectedColors.map((color: any) => ({
        name: color.label,
        hex: color.hex,
        imageUrls:
          prevData.colors.find((c) => c.name === color.label)?.imageUrls || [],
      })),
    }));
  };

  // Fungsi untuk menangani perubahan gambar
  const handleImageChange = (
    colorIndex: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(event.target.files || []);
    setFormData((prevData) => {
      const updatedColors = [...prevData.colors];
      updatedColors[colorIndex].imageUrls = files.map((file) =>
        URL.createObjectURL(file),
      );
      return { ...prevData, colors: updatedColors };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      // Jika nama field sesuai dengan salah satu property 'dimensions'
      if (['width', 'height', 'depth'].includes(name)) {
        return {
          ...prevData,
          dimensions: {
            ...prevData.dimensions,
            [name]: Number(value),
          },
        };
      }

      if (['period', 'coverage'].includes(name)) {
        return {
          ...prevData,
          warranty: {
            ...prevData.warranty,
            [name]: value,
          },
        };
      }

      // Jika nama field bukan 'dimensions', maka langsung update field lainnya
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const reset = () => {
    setFormData(initialData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='w-full mx-auto bg-backgroundSecond p-6 shadow-lg rounded-md'
    >
      <h2 className='text-2xl font-semibold mb-4 text-center'>
        Add New Product
      </h2>
      {/* Name */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter product name'
        />
      </div>
      {/* Description */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='description'>
          Description
        </label>
        <textarea
          name='description'
          id='description'
          value={formData.description}
          onChange={handleChange}
          required
          className='w-full bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter product Description'
        />
      </div>
      {/* Choice Categories */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='category'>
          Category
        </label>
        <Select
          instanceId='category-select'
          unstyled
          isMulti
          name='category'
          options={categoryOptions}
          value={formData.category.map((c) => ({
            value: c.name,
            label: c.name,
          }))}
          onChange={handleCategoryChange}
          placeholder='Select product categories'
          classNames={{
            input: () => '[&_input:focus]:ring-1',
            control: () =>
              'form-multiselect text-text border p-2 rounded-lg bg-backgroundSecond hover:cursor-pointer',
            menu: () => 'bg-background',
            option: () => 'p-2 hover:bg-foreground/50',
            multiValue: () => 'bg-background',
            multiValueLabel: () => 'bg-gray-100 bg-opacity-50 p-1 rounded-md',
            multiValueRemove: () => 'hover:text-red-600 hover:scale-110',
          }}
          //   classNamePrefix='select-multi-choice'
        />
      </div>
      {/* Price */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='price'>
          Price
        </label>
        <input
          type='number'
          name='price'
          id='price'
          value={formData.price}
          onChange={handleChange}
          required
          className='w-full bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter product Price'
        />
      </div>

      {/* Deimension */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='dimension'>
          Dimension
        </label>
        <div className='flex gap-5'>
          <div className=' flex items-center text-nowrap gap-2'>
            <span className='text-sm'>Width :</span>
            <input
              type='number'
              name='width'
              id='width'
              value={formData.dimensions.width}
              onChange={handleChange}
              required
              className=' bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
            />
          </div>
          <div className=' flex items-center text-nowrap gap-2'>
            <span className='text-sm'>Height :</span>
            <input
              type='number'
              name='height'
              id='height'
              value={formData.dimensions.height}
              onChange={handleChange}
              required
              className=' bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
            />
          </div>
          <div className=' flex items-center text-nowrap gap-2'>
            <span className='text-sm'>Depth :</span>
            <input
              type='number'
              name='depth'
              id='depth'
              value={formData.dimensions.depth}
              onChange={handleChange}
              required
              className=' bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
            />
          </div>
        </div>
      </div>
      {/* Weight */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='weight'>
          Weight
        </label>
        <input
          type='number'
          name='weight'
          id='weight'
          value={formData.weight}
          onChange={handleChange}
          required
          className='bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
        />
      </div>

      {/* Choice Materials */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='category'>
          Materials
        </label>
        <Select
          instanceId='material-select'
          unstyled
          isMulti
          name='material'
          options={materialOptions}
          value={formData.material.map((c) => ({
            value: c.name,
            label: c.name,
          }))}
          onChange={handleMaterialChange}
          placeholder='Select product categories'
          classNames={{
            input: () => '[&_input:focus]:ring-1',
            control: () =>
              'form-multiselect text-text border p-2 rounded-lg bg-backgroundSecond hover:cursor-pointer',
            menu: () => 'bg-background',
            option: () => 'p-2 hover:bg-foreground/50',
            multiValue: () => 'bg-background',
            multiValueLabel: () => 'bg-gray-100 bg-opacity-50 p-1 rounded-md',
            multiValueRemove: () => 'hover:text-red-600 hover:scale-110',
          }}
          //   classNamePrefix='select-multi-choice'
        />
      </div>
      {/* Choice Color */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='color'>
          Color
        </label>
        <Select
          instanceId='color-select'
          unstyled
          isMulti
          name='color'
          options={colorOptions}
          value={formData.colors.map((c) => ({
            value: c.name,
            label: c.name,
            hex: c.hex,
          }))}
          onChange={handleColorChange}
          placeholder='Select product colors'
          classNames={{
            input: () => '[&_input:focus]:ring-1',
            control: () =>
              'form-multiselect text-text border p-2 rounded-lg bg-backgroundSecond hover:cursor-pointer',
            menu: () => 'bg-background',
            option: () => 'p-2 hover:bg-foreground/50',
          }}
          styles={{
            multiValue: (base, { data }) => ({
              ...base,
              color: '#ffffff',
            }),
            multiValueLabel: (base, { data }) => ({
              ...base,
              backgroundColor: data.hex,
              color: '#ffffff',
              padding: '0.2rem',
            }),
            multiValueRemove: (base) => ({
              ...base,
              color: '#ffffff',
              ':hover': {
                backgroundColor: '#ff0000',
                color: 'white',
              },
            }),
          }}
        />
      </div>
      {/* Input Image every color */}
      <div className='mb-4 flex flex-wrap gap-2'>
        {formData.colors.map((color, index) => (
          <div key={index}>
            <label className='block text-sm font-medium mb-2 '>
              Upload multi images for {color.name}
            </label>
            <input
              type='file'
              multiple
              onChange={(e) => handleImageChange(index, e)}
              className='form-input-file'
            />
          </div>
        ))}
      </div>
      {/* Stock */}
      <div className='mb-4'>
        <label
          className='block text-md font-medium mb-2'
          htmlFor='stockQuantity'
        >
          Stock
        </label>
        <input
          type='number'
          name='stockQuantity'
          id='stockQuantity'
          value={formData.stockQuantity}
          onChange={handleChange}
          required
          className='w-full bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
        />
      </div>
      {/* Manufaktur or Brand */}
      <div className='mb-4'>
        <label
          className='block text-md font-medium mb-2'
          htmlFor='manufacturer'
        >
          Manufactur or Brand
        </label>
        <input
          type='text'
          name='manufacturer'
          id='manufacturer'
          value={formData.manufacturer}
          onChange={handleChange}
          required
          className='w-full bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter product Manufactur or Brand'
        />
      </div>
      {/* Warranty Period */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='period'>
          Waranty Period
        </label>
        <input
          type='text'
          name='period'
          id='period'
          value={formData.warranty?.period}
          onChange={handleChange}
          required
          className='w-full bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter product Waranty Period'
        />
      </div>
      {/* Warranty Period */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='coverage'>
          Waranty coverage
        </label>
        <textarea
          name='coverage'
          id='coverage'
          value={formData.warranty?.coverage}
          onChange={handleChange}
          required
          className='w-full bg-backgroundSecond focus:bg-background p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter product Waranty coverage'
        />
      </div>
      {/* Model 3D */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='modelUrls'>
          Model 3D
        </label>
        <input
          name='modelUrls'
          type='file'
          multiple
          value={formData.modelUrls}
          onChange={handleChange}
          className='form-input-file'
        />
      </div>
      {/* Video */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2' htmlFor='videoUrls'>
          Video Urls
        </label>

        <input
          name='videoUrls'
          type='file'
          multiple
          value={formData.videoUrls}
          onChange={handleChange}
          className='form-input-file'
        />
      </div>

      {/* Botton */}
      <div className='flex justify-between'>
        <button
          onClick={reset}
          className='px-4 py-2 text-md font-semibold text-red-600  rounded border-2 border-red-600'
        >
          Reset
        </button>
        <button
          type='submit'
          className='px-4 py-2 text-md font-semibold text-text bg-blue-600 rounded hover:bg-blue-700 focus:outline-none'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
