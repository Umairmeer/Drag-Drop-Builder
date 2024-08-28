// src/components/Canvas.tsx
'use client';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";


// Define item types for the drop target
const itemTypes = {
  BUTTON: 'button',
  CARD: 'card',
  NAVBAR: 'navbar',
  FOOTER: 'footer',
};


// Define the interface for dropped items
interface DroppedItem {
  id: string;
  type: string;
}

// Canvas component where items are dropped and displayed
export default function Canvas() {
   // State to store items dropped on the canvas
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
// Set up drop functionality using react-dnd
  const [, drop] = useDrop({
    accept: Object.values(itemTypes), // Accept items of specified types
    drop: (item: DroppedItem) => {
      // Add dropped item to the state
      setDroppedItems((prevItems) => [...prevItems, item]);
    },
  });

  // Render a dropped item based on its type
  const renderDroppedItem = (item: DroppedItem, index: number) => {
    switch (item.type) {
      case itemTypes.BUTTON:
        return (
          <div key={index} className="relative">
            <Button>Button</Button>
            <button
              className="absolute top-0 right-0 text-red-500 opacity-0 hover:opacity-100"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </div>
        );
      case itemTypes.CARD:
        return (
          <div key={index} className="relative">
            <Card>Card Content</Card>
            <button
              className="absolute top-0 right-0 text-red-500 opacity-0 hover:opacity-100"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </div>
        );
      case itemTypes.NAVBAR:
        return (
          <div key={index} className="relative">
            <Navbar />
            <button
              className="absolute top-0 right-0 text-red-500 opacity-0 hover:opacity-100"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </div>
        );
      case itemTypes.FOOTER:
        return (
          <div key={index} className="relative">
            <Footer />
            <button
              className="absolute top-0 right-0 text-red-500 bg-red-500 opacity-0 hover:opacity-100"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  // Handle the deletion of an item from the canvas
  const handleDelete = (index: number) => {
    setDroppedItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Callback ref for drop functionality
  const dropRef = (node: HTMLDivElement | null) => {
    if (node) {
      drop(node);
    }
  };

  return (
    <div ref={dropRef} className="w-[900px] p-6 bg-gray-200 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Canvas</h2>
      {droppedItems.map((item, index) => renderDroppedItem(item, index))}
    </div>
  );
}
