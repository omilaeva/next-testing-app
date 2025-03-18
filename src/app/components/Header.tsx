"use client"; 

import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#003366] shadow-lg">
      {/* Left side: HyperIn Care logo */}
      <div className="text-white text-lg font-semibold">
        HyperIn<span className="text-white"> Care</span>
      </div>

      {/* Right side: User Info */}
      <div className="flex items-center space-x-2">
        <div className="text-white text-sm">Sarah Johnson</div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:border-green-600 border-2">
          SJ
        </div>
      </div>
    </div>
  );
};

export default Header;
