import React from 'react';
import ConnectImage from '../../Media/Connect.png';
import Wallet1Image from '../../Media/Wallet1.png';
import Wallet2Image from '../../Media/Wallet2.png';
import Wallet3Image from '../../Media/Wallet3.png';

const Connect = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex-1">
        <img src={ConnectImage} alt="Connect Wallet" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="flex-1 md:pl-10 mt-6 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">Connect Wallet</h1>
        <p className="text-gray-400 px-2 mb-2">Choose a Wallet you want to connect.</p>
        <p className="text-gray-400 px-2 mb-6">There are several Wallet Providers.</p>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105">
            <img src={Wallet1Image} alt="Metamask" className="w-10 h-10 mr-4" />
            <h1 className="text-lg font-medium">Metamask</h1>
          </div>
          <div className="flex items-center bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105">
            <img src={Wallet2Image} alt="Paypal" className="w-10 h-10 mr-4" />
            <h1 className="text-lg font-medium">Paypal</h1>
          </div>
          <div className="flex items-center bg-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105">
            <img src={Wallet3Image} alt="Coinbase" className="w-10 h-10 mr-4" />
            <h1 className="text-lg font-medium">Coinbase</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
