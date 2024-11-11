import React from 'react';
import IconImage from '../../Media/Icon.png';

const Icons = () => {
    const data = [
        {
            Image: IconImage,
            Name: 'Setup Your Wallet',
            Description: 'In the quaint little town of Eldridge, where the cobblestone streets whispered tales of yesteryear, the sun dipped low on the horizon, casting a golden hue over the rooftops.',
        },
        {
            Image: IconImage,
            Name: 'Create Collection',
            Description: 'The sun dipped low on the horizon, casting a golden hue over the rooftops. In the quaint little town of Eldridge, where the cobblestone streets whispered tales of yesteryear.',
        },
        {
            Image: IconImage,
            Name: 'Trade & Collect',
            Description: 'The sun dipped low on the horizon, casting a golden hue over the rooftops. In the quaint little town of Eldridge, where the cobblestone streets whispered tales of yesteryear.',
        }
    ];

    return (
        <div className='bg-black text-white min-h-screen flex flex-col px-10 py-10'>
            <h1 className="text-4xl px-10 font-bold mb-4">How It Works</h1>
            <h2 className="text-1xl px-12 mb-8">Find out how to Get Started</h2>
            <div className="flex justify-center items-center gap-6 flex-wrap p-6">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col w-80 items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        <img src={item.Image} alt={item.Name} className="w-36 h-36 mb-2 transition-transform transform hover:scale-110" />
                        <h3 className="text-lg font-semibold">{item.Name}</h3>
                        <p className="text-sm text-gray-300 text-center">{item.Description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Icons;
