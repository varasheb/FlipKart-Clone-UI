import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <nav className='flex items-center justify-between bg-blue-950 py-4 px-8'>
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/src/assets/flipkart.svg" alt="logo" width='100px' height='100px' />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Link to="/search">
            <input
              type="text"
              placeholder="Search for Product"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ width: '500px', height: '40px' }}
            />
            <button className="absolute inset-y-0 right-0 px-4 bg-blue-600 text-white rounded-md">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Link>
        </div>

        {/* Login */}
        <div className='relative'>
          <Link
            to="#"
            className='bg-transparent text-slate-200 px-4 py-2'
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <FontAwesomeIcon icon={faUser} className='mr-2' />
            Login
           {isDropdownOpen && (
  <div className='absolute top-full left-0 mt-1 rounded-md shadow-lg w-60 bg-white'>
    <ul className='py-2  rounded-md text-slate-900 shadow-md'>
      <li>
        <Link to="/login" className='hover:bg-yellow-400 h-10 w-full  flex items-center '>
          <div className='ml-6 '>SignIn </div>
        </Link>
      </li>
      <li>
        <Link to="/customer/register" className='hover:bg-yellow-400 h-10 w-full block'>
        <div className='ml-6 '> New Customer </div>
        </Link>
      </li>
      <li>
        <Link to="/account" className='hover:bg-yellow-400 h-10 w-full block'>
        <div className='ml-6 '> Account </div>
        </Link>
      </li>
      <li>
        <Link to="/edit-profile" className='hover:bg-yellow-400 h-10 w-full block'>
        <div className='ml-6 '>Edit Profile </div>

        </Link>
      </li>
      <li>
        <Link to="/orders" className='hover:bg-yellow-400 h-10 w-full block'>
        <div className='ml-6 '> Orders  </div>
        </Link>
      </li>
      <li>
        <Link to="/wishlist" className='hover:bg-yellow-400 h-10 w-full block'>
        <div className='ml-6 '> Wishlist  </div>
        </Link>
      </li>
    </ul>
  </div>
)}
          </Link>
        </div>

        {/* Cart */}
        <div className=''>
          <Link to="/cart" className='bg-transparent text-slate-200 flex align-middle justify-center mt-2'>
            <FontAwesomeIcon icon={faShoppingCart} className='mt-1' /><pre> Cart</pre>
          </Link>
        </div>

        {/* Become Seller Option */}
        <div className=''>
          <Link to="/seller/register" className='bg-transparent text-slate-200 flex align-middle justify-center'>
            <FontAwesomeIcon icon={faStore} className='mr-2 mt-1' />
            <h5>Become a Seller</h5>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
