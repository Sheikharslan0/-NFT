import React from 'react';
import { IoRocketOutline } from 'react-icons/io5';
import Creater1Image from '../../Media/Creater1.png';
import Creater2Image from '../../Media/Creater2.png';
import Creater3Image from '../../Media/Creater3.png';
import Creater4Image from '../../Media/Creater4.png';
import Creater5Image from '../../Media/Creater5.png';
import Creater6Image from '../../Media/Creater6.png';
import { Link } from 'react-router-dom';

export const creatorsData = [
  {
      id: 1,
      name: 'Keeoitreal',
      image: Creater1Image,
      Sale: 'Total Sales',
      Price: '34.53 ETH',
      highestBid: '1.50 ETH',
    },
    {
      id: 2,
      name: 'Digilab',
      image: Creater2Image,
      Sale: 'Total Sales',
      Price: '67.93 ETH',
      highestBid: '2.50 ETH',
    },
    {
      id: 3,
      name: 'Keeoitreal',
      image: Creater3Image,
      Sale: 'Total Sales',
      Price: '98.45 ETH',
      highestBid: '1.50 ETH',
    },
    {
      id: 4,
      name: 'Digilab',
      image: Creater4Image,
      Sale: 'Total Sales',
      Price: '87.51 ETH',
      highestBid: '2.50 ETH',
    },
    {
      id: 5,
      name: 'Keeoitreal',
      image: Creater5Image,
      Sale: 'Total Sales',
      Price: '34.53 ETH',
      highestBid: '1.50 ETH',
    },
    {
      id: 6,
      name: 'Digilab',
      image: Creater6Image,
      Sale: 'Total Sales',
      Price: '67.93 ETH',
      highestBid: '2.50 ETH',
    },
    {
      id: 7,
      name: 'Keeoitreal',
      image: Creater1Image,
      Sale: 'Total Sales',
      Price: '98.45 ETH',
      highestBid: '1.50 ETH',
    },
    {
      id: 8,
      name: 'Digilab',
      image: Creater2Image,
      Sale: 'Total Sales',
      Price: '87.51 ETH',
      highestBid: '2.50 ETH',
    },
    {
      id: 9,
      name: 'Keeoitreal',
      image: Creater5Image,
      Sale: 'Total Sales',
      Price: '74.03 ETH',
      highestBid: '1.50 ETH',
    },
    {
      id: 10,
      name: 'Digilab',
      image: Creater6Image,
      Sale: 'Total Sales',
      Price: '97.43 ETH',
      highestBid: '2.50 ETH',
    },
    {
      id: 11,
      name: 'Keeoitreal',
      image: Creater1Image,
      Sale: 'Total Sales',
      Price: '78.76 ETH',
      highestBid: '1.50 ETH',
    },
    {
      id: 12,
      name: 'Digilab',
      image: Creater4Image,
      Sale: 'Total Sales',
      Price: '07.51 ETH',
      highestBid: '2.50 ETH',
    },
  ];
  const Creating = () => {

  return (
    <div className="p-6 bg-black text-white py-20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Top Creators</h1>
          <p className="text-gray-400 px-2">Checkout top NFT creators in the marketplace.</p>
        </div>
        <Link to="/Ranking" className="flex items-center px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-600 transition duration-300">
          <IoRocketOutline className="mr-2" />
          View Ranking
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {creatorsData.map((item) => (
          <div key={item.id} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h1 className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center rounded-full ring-2 ring-purple-800 text-purple-500 mb-2"> {item.id}</h1>
            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mb-2" />
            <div className="text-center">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-gray-400">
                {item.Sale}: <span className="font-bold text-white">{item.Price}</span>
              </p>
              <p className="text-gray-400">
                HighestBid: <span className="font-bold text-white">{item.highestBid}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creating;
