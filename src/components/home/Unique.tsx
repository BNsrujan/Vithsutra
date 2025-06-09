import { BadgeMinus, Eye } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StackCard = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
    <div className="flex items-center gap-3 mb-4">
      <Eye className="text-black" />
      <h1 className="text-xl font-bold">An Ambitious Vision</h1>
    </div>
    <p className="text-gray-600 text-md mb-4">
      Simplifying lives of businesses and individuals for an ever-better future
    </p>
    <Image
      src="/robotics/Energy_Management.png"
      alt="Vision"
      width={450}
      height={150}
      className="rounded-lg object-contain"
    />
    <Link href="/about" className="mt-6">
      <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-yellow transition">
        About Us
      </button>
    </Link>
  </div>
);

const LongCard = () => (
  <div className="w-1/2 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-3 mb-4">
        <BadgeMinus className="text-black" />
        <h1 className="text-2xl font-bold">Partner program</h1>
      </div>
      <p className="text-gray-600 text-lg mb-4">Join our growing network</p>
    </div>
    <Image
      src="/robotics/Energy_Management.png"
      alt="Robot"
      width={500}
      height={300}
      className="rounded-lg object-contain"
    />
    <Link href="/join" className="mt-6">
      <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-amber-300 transition">
        Become a Partner
      </button>
    </Link>
  </div>
)
const Unique = () => {
  return (
    <div className="flex flex-row bg-gray-100 min-h-screen p-10 gap-6">
      {/* Left big card */}
      <LongCard />
      {/* Right side: 2 stacked cards */}
      <div className="w-1/2 flex flex-col gap-6">
        {/* Card 1 */}
        <StackCard />
        {/* Card 2 */}
        <StackCard />
      </div>
    </div>
  );
};

export default Unique;
