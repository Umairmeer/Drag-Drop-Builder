// src/app/layout.tsx
import React from 'react';
import './globals.css'; // Include your global styles here
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Application Title',
  description: 'Description of your application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <main className="flex h-screen">
          {/* Sidebar and Canvas can be included here or in other components */}
          {children}
        </main>
      </body>
    </html>
  );
}
