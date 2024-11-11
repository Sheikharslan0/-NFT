import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
import HighlightedImage from "../../Media/Highlighted.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=" border-t border-t-gray-500 flex bg-black flex-col-reverse lg:flex-row items-center justify-between gap-10 p-8 lg:p-20">
      <div className="space-y-6 max-w-lg text-white ">
        <h1 className="text-3xl lg:text-6xl font-bold  leading-tight">
          Discover <br /> Digital Art & Collect NFTs
        </h1>
        <p className="text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ratione omnis explicabo, deleniti ea ipsum voluptatum harum nostrum eveniet.
        </p>
        <Link to="/Signup" className="flex items-center w-44 gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-500 transition duration-300 ease-in-out">
          <FaRegPaperPlane className="w-5 h-5" /> Get Started
        </Link>
        <div className="flex gap-10 text-white text-center">
          <div>
            <h2 className="text-2xl font-bold">240k+</h2>
            <p className='text-[20px]'>Total sales</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold" >100k+</h2>
            <p className="text-[20px]"> Auction</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">240k+</h2>
            <p className="text-[20px]">Artist</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={HighlightedImage}
          alt="Highlighted"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
