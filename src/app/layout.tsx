import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

const dmSans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Future Cube',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} min-h-screen w-full bg-gray-950 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
