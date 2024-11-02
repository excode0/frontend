// src/components/Navbar.tsx
'use client';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';
import { FiBell, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const { theme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className='w-full fixed top-0 flex justify-end items-center p-2 pointer-events-none z-30'>
      <div className='flex items-center gap-5 relative bg-backgroundSecond pointer-events-auto p-2'>
        <button className='relative p-2 rounded-full hover:bg-background'>
          <FiBell className='text-xl' />
          <span className='absolute top-1 right-1 bg-red-500 text-xs font-semibold rounded-full px-1'>
            3
          </span>
        </button>

        <button
          onClick={toggleDropdown}
          className='flex items-center hover:bg-background space-x-2 p-2 rounded-lg'
        >
          <FiUser className='text-xl' />
          <span className='hidden md:inline'>Profile</span>
        </button>

        {isOpen && (
          <div className='absolute right-0 top-14 w-48 rounded-md shadow-lg z-10 bg-backgroundSecond'>
            <div className='py-1'>
              <div className='px-4 py-2'>
                <button
                  onClick={() => changeTheme('')}
                  className={`block w-full text-left px-4 py-2 `}
                >
                  Light Theme
                </button>
                <button
                  onClick={() => changeTheme('dark')}
                  className={`block w-full text-left px-4 py-2`}
                >
                  Dark Theme
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
