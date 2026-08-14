import './globals.css';
import type { Metadata } from 'next';
import React from 'react'; // এই লাইনটি খুব গুরুত্বপূর্ণ!

export const metadata: Metadata = {
  title: 'Monitor Dashboard',
  description: 'Command Center',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
