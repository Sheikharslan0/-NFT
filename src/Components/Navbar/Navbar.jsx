import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineWallet } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-20 h-[70px] bg-black text-white relative shadow-md">
      <div className="logo text-lg font-bold flex items-center">
        <HiOutlineWallet className="mr-2" size={22} />
        NFT Marketplace
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} className="transition duration-300 transform rotate-90" /> : <FaBars size={24} className="transition duration-300 transform rotate-0" />}
      </div>

      {/* Nav Links */}
      <ul
        className={`md:flex md:gap-8 absolute md:static bg-black w-full md:w-auto transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'top-[70px] opacity-100' : 'top-[-500px] opacity-0 md:opacity-100'
        }`}
      >
        <li className="relative py-2 md:py-0 text-center transition duration-300 transform hover:scale-105 group">
          <Link to="/NFT" className="hover:text-purple-400">Marketplace</Link>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-purple-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className="relative py-2 md:py-0 text-center transition duration-300 transform hover:scale-105 group">
          <Link to="/Ranking" className="hover:text-purple-400">Ranking</Link>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-purple-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className="relative py-2 md:py-0 text-center transition duration-300 transform hover:scale-105 group">
          <Link to="/Connect" className="hover:text-purple-400">Connect Wallet</Link>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-purple-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </li>
        <li className="md:hidden py-2 text-center">
          <Link to="/Signup" className="flex gap-1 bg-purple-600 px-4 py-2 rounded-lg justify-center transition duration-300 transform hover:scale-105">
            <AiOutlineUser size={20} /> Sign Up
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex">
        <Link to="/Signup" className="flex gap-1 bg-purple-600 px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105">
          <AiOutlineUser size={20} /> Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
