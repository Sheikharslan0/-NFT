import React from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import Discover1Image from '../../Media/Discover1.png';
import Avatar1Image from '../../Media/Avatar1.png';
import Discover2Image from '../../Media/Discover2.png'; 
import Avatar2Image from '../../Media/Avatar2.png';
import Discover3Image from '../../Media/Discover3.png';
import Avatar3Image from '../../Media/Avatar3.png';
import { Link } from 'react-router-dom';

export const cardsData = [
  {
      image: Discover1Image,
      avatar: Avatar1Image,
      title: 'Distant Gallery',
      creator: 'MoonDancer',
      price: '1.63 ETH',
      highestBid: '0.73 ETH',
    },
    {
      image: Discover2Image,
      avatar: Avatar2Image,
      title: 'Mystic Forest',
      creator: 'StarGazer',
      price: '2.10 ETH',
      highestBid: '1.50 ETH',
    },
    {
      image: Discover3Image,
      avatar: Avatar3Image,
      title: 'Cosmic Vibes',
      creator: 'SkyWalker',
      price: '3.00 ETH',
      highestBid: '2.50 ETH',
    },
    {
      image: Discover3Image,
      avatar: Avatar3Image,
      title: 'Juliey Vibes',
      creator: 'Lilimili',
      price: '5.00 ETH',
      highestBid: '3.50 ETH',
    },
    {
      image: Discover3Image,
      avatar: Avatar3Image,
      title: 'Huller Vibes',
      creator: 'SkyWalker',
      price: '3.00 ETH',
      highestBid: '2.50 ETH',
    },
  ];

      const Discover = () => {
  return (
    <div className="p-4 border-t border-t-gray-500 py-20 bg-black text-white">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-4xl font-bold">Discover more NFTs</h1>
          <p className="px-3 text-xl py-3">Explore new Trending NFTs</p>
        </div>
        <div className="   flex items-center border p-2 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300 ease-in-out">
          <IoEyeOutline className="mr-2 text-lg md:text-xl" />
          <Link to="/NFT" className="text-lg md:text-sm">See All</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.slice(0,3).map((card, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h1 className="text-xl font-semibold">{card.title}</h1>
              <div className="flex items-center mt-2">
                <img src={card.avatar} alt={card.creator} className="w-8 h-8 rounded-full mr-2" />
                <p className="text-gray-700">{card.creator}</p>
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
}

export default Discover;
