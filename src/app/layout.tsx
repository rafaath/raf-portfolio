// layout.tsx

import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Define LayoutProps type properly
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

// Ensure correct usage of LayoutProps and proper default export of RootLayout function
const RootLayout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title || 'My Portfolio'}</title>
        <meta name="description" content={description || 'Welcome to my portfolio'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </>
  );
};

export default RootLayout;
