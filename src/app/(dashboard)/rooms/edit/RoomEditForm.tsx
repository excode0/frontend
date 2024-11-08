import { styleRooms } from '@/data/dataDummy';
import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';

interface RoomEditFormProps {
  initialData: Rooms;
  onSubmit: (data: Rooms) => void;
}

const RoomEditForm: React.FC<RoomEditFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<Rooms>(initialData);
  const [images, setImages] = useState<string[]>([]);
  const [modelFiles, setModelFiles] = useState<File[]>([]);
  const [videoFiles, setVideoFiles] = useState<File[]>([]);

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      setImages((prevImages) => [...prevImages, ...uploadedImages]);
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFileState: React.Dispatch<React.SetStateAction<File[]>>,
  ) => {
    if (e.target.files) {
      setFileState(Array.from(e.target.files));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const reset = () => {
    setFormData(initialData);
    setImages([]);
    setModelFiles([]);
    setVideoFiles([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full mx-auto bg-backgroundSecond p-6 shadow-lg rounded-md'
    >
      <h2 className='text-2xl font-semibold mb-4 text-center'>Edit Room</h2>

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
          className='w-full bg-backgroundSecond p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter room name'
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
          className='w-full bg-backgroundSecond p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200'
          placeholder='Enter room description'
        />
      </div>

      {/* Style */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2'>Style</label>
        <Select
          instanceId='style-select'
          unstyled
          isMulti
          options={styleOptions}
          value={formData.style.map((style) => ({
            value: style.name,
            label: style.name,
          }))}
          onChange={handleStyleChange}
          placeholder='Select room styles'
          classNamePrefix='react-select'
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
        />
      </div>

      {/* Multi Image Upload */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2'>Upload Images</label>
        <input
          type='file'
          multiple
          onChange={handleImageUpload}
          className='form-input-file'
        />
        <div className='grid grid-cols-3 gap-4 mt-4'>
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Uploaded preview ${index + 1}`}
              className='w-full h-24 object-cover rounded-lg'
            />
          ))}
        </div>
      </div>

      {/* Model 3D */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2'>Model 3D</label>
        <input
          type='file'
          multiple
          onChange={(e) => handleFileUpload(e, setModelFiles)}
          className='form-input-file'
        />
      </div>

      {/* Video URLs */}
      <div className='mb-4'>
        <label className='block text-md font-medium mb-2'>Video URLs</label>
        <input
          type='file'
          multiple
          onChange={(e) => handleFileUpload(e, setVideoFiles)}
          className='form-input-file'
        />
      </div>

      {/* Buttons */}
      <div className='flex justify-between'>
        <button
          type='button'
          onClick={reset}
          className='px-4 py-2 font-semibold text-red-600 border-2 border-red-600 rounded'
        >
          Reset
        </button>
        <button
          type='submit'
          className='px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RoomEditForm;
