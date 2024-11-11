import React from 'react';
import { cardsData } from '../Discover/Discover';
import { CiSearch } from 'react-icons/ci';

const NFT = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="mb-8 py-5">
        <h1 className="text-4xl font-bold mb-2">Browse Marketplace</h1>
        <p className="text-gray-400 px-2">Browse through more than 50k NFTs Marketplace</p>
      </div>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Your Favourite NFTs"
          className="w-full p-2 pr-10 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 cursor-pointer" size={24} />
      </div>
      <div className="flex justify-around mb-2">
  <h1 className="text-lg border-b-2 border-purple-500 font-semibold hover:text-purple-500 cursor-pointer transition duration-300 ease-in-out">NFTs</h1>
  <h1 className="text-lg font-semibold hover:text-purple-500 cursor-pointer">Collections</h1>
</div>

      <hr className="border-gray-700 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 rounded-lg object-cover mb-2"
            />
            <div className="p-2">
              <h2 className="text-lg font-medium">{card.title}</h2>
              <div className="flex items-center mt-2">
                <img src={card.avatar} alt={card.creator} className="w-8 h-8 rounded-full mr-2" />
                <p className="text-gray-400">{card.creator}</p>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-gray-500">Price</p>
                  <h5 className="text-lg font-bold">{card.price}</h5>
                </div>
                <div>
                  <p className="text-gray-500">Highest Bid</p>
                  <h5 className="text-lg font-bold">{card.highestBid}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFT;
