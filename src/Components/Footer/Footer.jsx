import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { HiOutlineWallet } from 'react-icons/hi2';
import { IoLogoInstagram } from 'react-icons/io5';

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10">
        
        <div>
          <h1 className="text-xl font-bold flex items-center mb-2">
            <HiOutlineWallet className="mr-2" /> NFT Marketplace
          </h1>
          <p className="mb-2">NFT Marketplace UI created with Anima For Figma.</p>
          <p className="mb-4 py-4 font-semibold">Join our Community</p>
          <div className="flex space-x-4 text-lg">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IoLogoInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FiYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-2">Explore</h1>
          <p className="mb-1 hover:text-purple-400 cursor-pointer">Marketplace</p>
          <p className="mb-1 hover:text-purple-400 cursor-pointer">Rankings</p>
          <p className="hover:text-purple-400 cursor-pointer">Connect a wallet</p>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Join Our Weekly Digest</h1>
          <p className="mb-4">
            Stay updated with the latest news and trends in the NFT marketplace.
          </p>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full p-2 pr-20 rounded-lg border border-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center">
              <FaRegEnvelope className="mr-1" />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className='border-t border-t-gray-500 mt-5 text-center'>
        <p className="text-gray-500 text-sm md:text-base">
          &copy; 2024 NFT Marketplace. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
