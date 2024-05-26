import { useState } from 'react';
import guest from '../../../images/guest.png'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-100 w-full mx-3">
      <button
        id="hs-dropdown-default"
        type="button"
        className="hs-dropdown-toggle flex items-center w-full h-full justify-center"
        onClick={toggleDropdown}
      >
        <img src={guest} className='w-[25px] h-[25px] rounded-full object-cover hover:shadow-lg' />
      </button>

      <div
        className={`hs-dropdown-menu absolute top-100 right-0 transition-[opacity,margin] duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 `}
        aria-labelledby="hs-dropdown-default"
      >
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          href="#"
        >
          Sign in
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          href="#"
        >
          Sign up
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          href="#"
        >
          Logout
        </a>
        <a
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          href="#"
        >
          Team Account
        </a>
      </div>
    </div>
  );
};

export default UserMenu;
