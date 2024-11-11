import React, { useState } from 'react';
import Img1Image from '../../Media/Img1.png';
import Img2Image from '../../Media/Img2.png';
import Img3Image from '../../Media/Img3.png';
import Img4Image from '../../Media/Img4.png';
import Img5Image from '../../Media/Img5.png';
import Img6Image from '../../Media/Img6.png';
import Img7Image from '../../Media/Img7.png';
import Img8Image from '../../Media/Img8.png';

const Trading = () => {
  const data = [
    {
      Image: [
        Img1Image,
        Img3Image,
      ],
      Name: "DSGN Animals",
      Description: 'Mr Fox',
    },
    {
      Image: [
        Img8Image,
        Img4Image,
      ],
      Name: 'DSGN Robots',
      Description: 'Mashrooms',
    },
    {
      Image: [
        Img7Image,
        Img5Image,
      ],
      Name: 'DSGN Animals',
      Description: 'Be kind to Robots',
    },
  ];

  const [selectedImages, setSelectedImages] = useState(
    data.map(item => item.Image[0]) 
  );

  const handleImageClick = (image, index) => {
    const updatedImages = [...selectedImages];
    updatedImages[index] = image; 
    setSelectedImages(updatedImages);
  };

  return (
    <div className="p-6 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Trading Collection</h1>
      <p className="text-lg mb-8">Check out our weekly Trading Collection.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-black rounded-lg shadow-lg overflow-hidden">
            <img src={selectedImages[index]} alt="Selected" className="w-full h-96 object-cover" />
            <div className="flex justify-between items-center p-4">
              <div className="flex gap-5">
                {item.Image.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Image ${idx + 1}`}
                    className="w-20 h-20 object-cover cursor-pointer"
                    onClick={() => handleImageClick(image, index)} 
                  />
                ))}
              </div>
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg">
                <h1 className="text-lg font-semibold">1024+</h1>
              </div>
            </div>
            <h1 className="text-xl px-3 font-semibold">{item.Name}</h1>
            <h1 className="text-sm px-4">{item.Description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trading;
