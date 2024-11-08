import { styleRooms } from '@/data/dataDummy';
import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';
interface RoomFormProps {
  onSubmit: (data: Rooms) => void;
}
const RoomForm: React.FC<RoomFormProps> = ({ onSubmit }) => {
  const initialData: Rooms = {
    id: 0,
    name: '',
    description: '',
    imageUrl: [],
    modelUrl: '',
    videoUrl: '',
    style: [],
  };

  const [formData, setFormData] = useState<Rooms>(initialData);
  const styleOptions = styleRooms.map((style) => ({
    value: style.name,
    label: style.name,
  }));

  const handleStyleChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>,
  ) => {
    const selectedStyle = styleRooms.filter((style) =>
      selectedOptions.map((option) => option.value).includes(style.name),
    );

    setFormData((prevData) => ({
      ...prevData,
      style: selectedStyle,
    }));
  };
  // Fungsi untuk menangani perubahan gambar
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Membaca file sebagai URL lokal untuk ditampilkan di interface
      const uploadedImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      // setImages((prevImages) => [...prevImages, ...uploadedImages]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      // Jika nama field bukan 'dimensions', maka langsung update field lainnya
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(formData);
  };
  const reset = () => {
    setFormData(initialData);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='w-full mx-auto bg-backgroundSecond p-6 shadow-lg rounded-md'
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>
          Add New Room
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
          <label
            className='block text-md font-medium mb-2'
            htmlFor='description'
          >
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

        {/* Choice Style */}
        <div className='mb-4'>
          <label className='block text-md font-medium mb-2' htmlFor='category'>
            Style
          </label>
          <Select
            instanceId='category-select'
            unstyled
            isMulti
            name='category'
            options={styleOptions}
            value={formData.style.map((c) => ({
              value: c.name,
              label: c.name,
            }))}
            onChange={handleStyleChange}
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
        {/* Input Multi Image */}
        <div className='mb-4 flex flex-col gap-2'>
          <label className='block text-sm font-medium mb-2'>
            Upload multi images
          </label>
          <input
            type='file'
            multiple
            onChange={handleImageUpload}
            className='form-input-file'
          />

          {/* SHOW IMAGE */}
          {/* <div className='grid grid-cols-3 gap-4 mt-4'>
            {images.map((imageUrl, index) => (
              <div key={index} className='relative'>
                <img
                  src={imageUrl}
                  alt={`Uploaded preview ${index + 1}`}
                  className='w-full h-24 object-cover rounded-lg'
                />
              </div>
            ))}
          </div> 
      */}
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
            value={formData.modelUrl}
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
            value={formData.videoUrl}
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
    </>
  );
};

export default RoomForm;
