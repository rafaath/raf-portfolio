// layout.tsx

import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function RootLayout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'My Portfolio'}</title>
        <meta name="description" content={description || 'Welcome to my portfolio'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
