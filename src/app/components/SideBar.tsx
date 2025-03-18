"use client"; 

import React, { useState } from 'react';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('Service Requests'); 

  const menuItems = [
    'Service Requests',
    'My Profile',
    'Notifications',
    'Messages',
    'Documents',
    'Settings',
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="w-64 bg-white p-6 h-screen">
     
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className={`cursor-pointer p-3 rounded-lg transition-all duration-200 
              ${item === activeItem ? 'bg-[#003366] text-white' : 'text-gray-700'}
              hover:bg-[#003366] hover:text-white`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
