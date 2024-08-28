// src/components/Sidebar.tsx
'use client';
import React from 'react';
import { useDrag } from 'react-dnd';
import { Button } from './button'; 
import { Card } from './card'; 
import Navbar from "@/components/ui/Navbar";
import CarouselSlider from "@/components/ui/CarouselSlider";
import { Calendar } from './calendar'; 
import Footer from './Footer';


// Define the item types for drag-and-drop functionality
const itemTypes = {
  BUTTON: 'button',
  CARD: 'card',
  NAVBAR: 'navbar',
  FOOTER: 'footer',
  CAROUSEL: 'carousel',
  CALENDAR: 'calendar',
};

// Define the interface for props used in DraggableElement
interface DraggableElementProps {
  id: string;
  type: string;
}

// DraggableElement component to make elements draggable
function DraggableElement({ id, type }: DraggableElementProps) {
  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: { id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

 // Callback ref to apply the drag functionality to the element
  const combinedRef = (node: HTMLDivElement | null) => {
    if (node) {
      drag(node); // Apply the drag ref to the node
    }
  };

  return (
    <div
      ref={combinedRef}
      className={`p-2 m-2 bg-gray-200 ${isDragging ? 'opacity-50' : 'opacity-100'} cursor-move`}
    >
      {type === itemTypes.BUTTON && <Button>Button</Button>}
      {type === itemTypes.CARD && <Card>Card Content</Card>}
      {type === itemTypes.NAVBAR && <Navbar />}
      {type === itemTypes.FOOTER && <Footer />}
      {type === itemTypes.CAROUSEL && <CarouselSlider />}
      {type === itemTypes.CALENDAR && <Calendar />}
    </div>
  );
}


// Sidebar component to list all draggable elements
export default function Sidebar() {
  const elements = [
    { id: 'button1', type: itemTypes.BUTTON },
    { id: 'card1', type: itemTypes.CARD },
    { id: 'navbar1', type: itemTypes.NAVBAR },
    { id: 'footer1', type: itemTypes.FOOTER },
    { id: 'carousel1', type: itemTypes.CAROUSEL },
    { id: 'calendar1', type: itemTypes.CALENDAR },
  ];

  return (
    <div className="w-[30%] p-4 border-r bg-gray-100 h-screen overflow-auto">
      <h2 className="text-xl font-bold mb-4">Components</h2>
      {elements.map((element) => (
        <DraggableElement key={element.id} id={element.id} type={element.type} />
      ))}
    </div>
  );
}
