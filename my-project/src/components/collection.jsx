import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const Collection2023 = () => {
  const collections = [
    {
      id: 1,
      title: "NEW SUMMER COLLECTION",
      description: "Women's clothing for all types",
    },
    {
      id: 2,
      title: "NEW ARRIVAL T-SHIRTS",
      description: "Women's clothing for all types",
    },
    {
      id: 3,
      title: "UNUSUAL OUTFITS FOR GIRLS",
      description: "Women's clothing for all types",
    },
  ];

  return (
    <div className="bg-[#EEE9D3] min-h-screen flex flex-col items-start py-12 px-4 md:px-12">
      {/* Header Section */}
      <div className="mb-8 pl-44">
        <p className="text-base text-[#1E1916]">Arrivals</p>
        <h1 className="text-4xl font-bold text-[#1E1916]">Collection 2023</h1>
      </div>

       {/* Collection Cards */}
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {collections.map((item) => (
          <div
            key={item.id}
            className="bg-[#1E1916] text-white p-6 w-full max-w-sm rounded-2xl flex flex-col justify-between relative shadow-lg mx-auto"
          >
            <p className="text-sm mb-2">Arrivals</p>
            <h2 className="text-lg font-semibold mt-auto">{item.title}</h2>
            <p className="text-xs text-[#BFBFBF]">{item.description}</p>


            {/* Icon Button */}
            <button
              className="absolute top-4 right-4 bg-[#F5F2E7] text-[#1E1916] w-8 h-8 flex items-center justify-center rounded-full shadow-md"
            >
              <MdArrowForward size={20} />

              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection2023;