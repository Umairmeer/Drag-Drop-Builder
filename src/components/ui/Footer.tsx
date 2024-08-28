// src/components/ui/Footer.tsx
'use client';
import React from 'react';
import { useDrag } from 'react-dnd';

const itemTypes = {
  FOOTER: 'footer',
};

const Footer = () => {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.FOOTER,
    item: { type: itemTypes.FOOTER },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`relative p-6 bg-gray-900 text-white rounded-lg shadow-md ${isDragging ? 'opacity-50' : 'opacity-100'} cursor-move`}
    >
      <div className="flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; 2024 Your Company</p>
          <p className="mt-1">All Rights Reserved</p>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
      <button
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity"
        style={{ zIndex: 10 }}
      >
        X
      </button>
    </div>
  );
};

export default Footer;
