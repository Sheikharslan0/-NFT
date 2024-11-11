import React from 'react';
import { CiUser, CiLock } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import SignupImage from '../../Media/Signup.png';

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-black min-h-screen">
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <img src={SignupImage} alt="Signup" className="object-cover rounded-lg shadow-lg w-full" />
      </div>

      <div className="md:w-1/2 w-full bg-black p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl text-white font-bold mb-4">Create Account</h1>
        <p className="text-gray-300 text-center mb-6">
          Welcome! Enter your details and start creating, collecting, and selling NFTs.
        </p>

        <form className="flex flex-col space-y-4">
          <div className="relative">
            <CiUser className="absolute left-3 top-3 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <MdOutlineEmail className="absolute left-3 top-3 text-gray-400" size={24} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <CiLock className="absolute left-3 top-3 text-gray-400" size={24} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <CiLock className="absolute left-3 top-3 text-gray-400" size={24} />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </form>

        <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-200">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
