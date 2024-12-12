import React from 'react';

const CultureSection = () => {
  return ( 

    <div className="bg-[#EEE9D3] flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-lg shadow-lg">

      
 {/* Left Section */}

      <div className="bg-[#DE6536] p-6 md:p-8 rounded-lg w-full md:w-1/2">
      
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Style trends are influenced by the cultures.
        </h2>

        <p className="text-sm md:text-base text-white opacity-90 mb-6">
          When they are in the means of fashion or how they are portrayed, 
          cultures constantly leave us in the trendy corner. What they seek 
          and the variety of fashions have their own aesthetics that define 
          us as individuals or a unity that makes us move.
        </p>

        <button className="flex items-center gap-3 bg-white text-[#1E1916] px-4 py-2 rounded-full shadow-md border-2 transition-all duration-300 font-bold text-sm">
          LEARN MORE
          <span className="bg-[#1E1916] text-white w-8 h-8 flex items-center justify-center rounded-full">
            →
          </span>
        </button>

      </div>


 {/* Right Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <img
          src="/images/r2.jpg" 
          alt="Two women smiling"
          className="rounded-lg shadow-lg"
        />
      </div>

    </div>

  );


};

export default CultureSection;
