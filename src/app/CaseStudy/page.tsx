import React from 'react';

const mediaImages = [
  '/media1.jpg',
  '/media2.jpg',
  '/media3.jpg',
  '/media4.jpg',
  '/media5.jpg',
  '/media6.jpg',
  '/media7.jpg',
  '/media8.jpg',
  '/media9.jpg',
  '/media10.jpg',
  '/media11.jpg',
  '/media12.jpg',
];

const AzukiShowcase = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap h-screen bg-company-black  text-white">
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
        <p className="text-gray-300 mb-6 max-w-md">
          At Azuki, we are building the future of anime through decentralized IP co-created with the community and innovative products that enrich the anime fan experience. Our Azuki collectibles have generated over $1B in secondary trading volume. Here are some things we’ve created so far.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all w-fit">
          EXPLORE →
        </button>
      </div>


      <div className="w-full md:w-1/2 gap-3 hover:gap-7 h-screen flex flex-wrap overflow-hidden  duration-500" >
        {mediaImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Media ${index + 1}`}
            className="rounded- object-cover w-[285px]  h-[285px]  rounded-[24px]  bg-red-400"
          />
        ))}
      </div>
    </div>
  );
};

export default AzukiShowcase;
