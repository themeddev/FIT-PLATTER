import { useState } from 'react';
import guest from '../../../images/guest.png';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/features/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  
  const handleLogout = () => {
    // Dispatch logout action to clear Redux state
    dispatch(logout());

    // Clear user information from local storage
    localStorage.removeItem('user');

    // Redirect to the login page
    navigate('/sign-in', { replace: true });
  };

  console.log(user)
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
        {user ? 
        (
        <>
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            to="/profile"
            onClick={() => setIsOpen(!isOpen)}
          >
            Profile
          </Link>
          {user.role === "Admin" && (
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              to="/dashboard"
              onClick={() => setIsOpen(!isOpen)}
            >
              Dashboard
            </Link>
          )}
          <button
            className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </>

        ) 
        : 
        (
        <>
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            to="/sign-in"
            onClick={() => setIsOpen(!isOpen)}
          >
            Sign in
          </Link>
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            to="/sign-up"
            onClick={() => setIsOpen(!isOpen)}
          >
            Sign up
          </Link>
        </>
        )
        } 

        <Link
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          to="/terms"
        >
          Terms and Conditions
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
