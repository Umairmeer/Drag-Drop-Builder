'use client';
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const itemTypes = {
  CAROUSEL: 'carousel',
};

const CarouselSlider: React.FC = () => {
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CAROUSEL,
    item: { type: itemTypes.CAROUSEL },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://via.placeholder.com/400x200?text=Slide+1',
    'https://via.placeholder.com/400x200?text=Slide+2',
    'https://via.placeholder.com/400x200?text=Slide+3',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      ref={drag as any} // Use `as any` to bypass TypeScript error
      className={`relative w-full max-w-md p-4 bg-white rounded-lg shadow-md ${isDragging ? 'opacity-50' : 'opacity-100'} cursor-move`}
    >
      <div className="relative overflow-hidden">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-auto rounded"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
      >
        ›
      </button>
      <button
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity"
        style={{ zIndex: 10 }}
      >
        X
      </button>
    </div>
  );
};

export default CarouselSlider;
