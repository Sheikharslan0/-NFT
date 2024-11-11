import React from 'react';
import PhotoImage from '../../Media/Photo.png';

const Join = () => {
  return (
    <div className="bg-black p-5 md:p-10 px-4 md:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex-1 mb-4 md:mb-0">
          <img src={PhotoImage} alt="Photo" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1 text-white relative px-4 md:px-20">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Join Our Weekly Digest</h1>
          <p className="text-sm md:text-base mb-4">
            Connect with other artists, buy and sell NFTs, and participate in the community-driven art market.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Enter Your Email here"
                className="w-full p-2 pr-20 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
