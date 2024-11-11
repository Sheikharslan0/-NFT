import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Trading from './Components/Trading/Trading';
import Discover from './Components/Discover/Discover';
import Icons from './Components/Icons/Icons';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
import Creating from './Components/Creating/Creating';
import Signup from './Components/Signup/Signup';
import Ranking from './Components/Ranking/Ranking';
import NFT from './Components/NFT/NFT';
import Connect from './Components/Connect/Connect';

const MainLayout = () => {
  return (
    <div>
      <Home />
      <Trading />
      <Creating />
      <Discover />
      <Icons />
      <Join />
    </div>
  );
};



const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/Connect" element={<Connect />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
};

export default App;
