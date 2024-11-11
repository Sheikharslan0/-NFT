import React from 'react';
import { creatorsData } from '../Creating/Creating';

const Ranking = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="mb-8 py-5">
        <h1 className="text-4xl font-bold mb-2">Top Creators</h1>
        <p className="text-gray-400 px-2">Check out top-ranking NFT artists on the NFT marketplace</p>
      </div>
      <div className="flex justify-between mb-6 py-5">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">Today</h1>
          <div className="w-20 h-1 bg-purple-500 mt-1" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">This Week</h1>
          <div className="w-20 h-1 bg-transparent mt-1" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">This Month</h1>
          <div className="w-20 h-1 bg-transparent mt-1" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">All Time</h1>
          <div className="w-20 h-1 bg-transparent mt-1" />
        </div>
      </div>
      <div className="flex justify-between  border p-2 border-gray-300 text-gray-500 rounded-lg mb-6">
        <h1 className="text-lg font-semibold px-2">ID</h1>
        <h1 className="text-lg font-semibold">Image</h1>
        <h1 className="text-lg font-semibold">Name</h1>
        <h1 className="text-lg font-semibold">Sales</h1>
        <h1 className="text-lg font-semibold">HighestBid</h1>
      </div>
      <div className="flex flex-col space-y-4">
        {creatorsData.map((data) => (
          <div key={data.id} className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between">
            <h1 className="w-8 h-8 flex items-center justify-center rounded-full ring-2 ring-purple-800 text-purple-500 mb-2">{data.id}</h1>
            <img src={data.image} alt={data.name} className="w-24 h-24 rounded-full" />
            <h1 className="text-lg font-medium mx-4">{data.name}</h1>
            <h1 className="text-lg font-bold text-white">{data.Price}</h1>
            <h1 className="text-lg font-bold text-white">{data.highestBid}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
