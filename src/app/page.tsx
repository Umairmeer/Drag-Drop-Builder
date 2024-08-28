'use client';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from '@/components/ui/Sidebar';
import Canvas from '@/components/ui/Canvas';

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <Sidebar />
        <Canvas />
      </div>
    </DndProvider>
  );
}
