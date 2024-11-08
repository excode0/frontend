'use client';
import { useState } from 'react';
import { FiHome, FiSettings, FiUser, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { SlBasket } from 'react-icons/sl';
import { BsBoxSeam } from 'react-icons/bs';
import { CgUserList } from 'react-icons/cg';
import { IoBarChartOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from 'react-icons/hi2';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`sticky ${
        isOpen ? 'w-64' : 'w-16 flex flex-col justify-start items-center'
      } `}
    >
      <div
        className={`fixed top-0 min-h-screen ${
          isOpen ? 'w-64' : 'w-16 flex flex-col justify-start items-center'
        }  transition-all duration-300 bg-backgroundSecond`}
      >
        <div className='w-full flex items-center justify-between px-4 py-4'>
          <h2 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>
            Dashboard
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-400 hover:text-foreground border-r-2 border-gray-400 hover:border-gray-200 rounded-full'
          >
            {isOpen ? (
              <HiMiniArrowLongLeft size={25} />
            ) : (
              <HiMiniArrowLongRight size={25} />
            )}
          </button>
        </div>
        <nav className={`mt-4 ${isOpen ? 'ml-4' : ''}`}>
          <SidebarLink
            href='/'
            icon={<FiHome />}
            label='Home'
            isOpen={isOpen}
          />
          <SidebarLink
            href='/orders'
            icon={<SlBasket />}
            label='Orders'
            isOpen={isOpen}
          />
          <SidebarLink
            href='/product'
            icon={<BsBoxSeam />}
            label='Products'
            isOpen={isOpen}
          />
          <SidebarLink
            href='/rooms'
            icon={<MdOutlineBedroomParent />}
            label='Rooms'
            isOpen={isOpen}
          />
          <SidebarLink
            href='/customers'
            icon={<CgUserList />}
            label='Customers'
            isOpen={isOpen}
          />
          <SidebarLink
            href='/analystic'
            icon={<IoBarChartOutline />}
            label='Analiystic'
            isOpen={isOpen}
          />
        </nav>
      </div>
    </aside>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
}

function SidebarLink({ href, icon, label, isOpen }: SidebarLinkProps) {
  const pathname = usePathname(); // Get the router instance
  // const isActive = router === href;
  const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
  return (
    <Link href={href}>
      <div
        className={`group flex items-center py-4 px-2  ${
          isActive ? 'bg-background border-l-2 border-foreground' : ''
        } hover:bg-background transition-colors`}
      >
        <div
          className={`text-lg ${
            isActive ? 'text-foreground' : ''
          } group-hover:text-foreground`}
        >
          {icon}
        </div>
        {isOpen && <span className='ml-4 '>{label}</span>}
      </div>
    </Link>
  );
}
