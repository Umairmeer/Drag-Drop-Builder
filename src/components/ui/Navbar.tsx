// src/components/ui/Navbar.tsx
'use client';
import React from 'react';
import { useDrag } from 'react-dnd';

const itemTypes = {
  NAVBAR: 'navbar',
};

export default function Navbar() {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.NAVBAR,
    item: { type: itemTypes.NAVBAR },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // Create a ref callback function
  const combinedRef = (node: HTMLDivElement | null) => {
    if (node) {
      drag(node); // Apply the drag ref to the node
    }
  };

  return (
    <nav
      ref={combinedRef}
      className={`flex w-[100%] flex-col p-4 bg-white text-slate-900 shadow-md ${isDragging ? 'opacity-50' : 'opacity-100'} cursor-move`}
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Navbar</h1>
        <button className="bg-slate-900 text-white hover:bg-white hover:text-slate-900 px-4 py-2 rounded">Login</button>
      </div>
      <ul className="flex space-y-2">
        <li>
          <a href="#" className="hover:bg-slate-900 hover:text-white mt-5 p-2 rounded">Home</a>
        </li>
        <li>
          <a href="#" className="hover:bg-slate-900 hover:text-white p-2 rounded">About</a>
        </li>
        <li>
          <a href="#" className="hover:bg-slate-900 hover:text-white p-2 rounded">Services</a>
        </li>
        <li>
          <a href="#" className="hover:bg-slate-900 hover:text-white p-2 rounded">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
