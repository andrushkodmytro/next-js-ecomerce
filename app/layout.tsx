import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'Next.js e-commerce app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='p-4 shadow-md'>
          <nav className='container max-w-screen-xl mx-auto px-8 flex '>
            <Link href='/'>
              <Image className='relative' src='/next.svg' alt='Next.js Logo' width={130} height={30} priority />
            </Link>
            <div className='ml-auto flex gap-4'>
              <Link href='/products' className='px-4 text-gray-600 hover:text-black'>
                Products
              </Link>
              <Link href='/blog' className='px-4 text-gray-600 hover:text-black'>
                Blog
              </Link>
              <Link href='/about' className='px-4 text-gray-600 hover:text-black'>
                About
              </Link>
            </div>
          </nav>
        </header>
        <main className='flex min-h-screen flex-col items-center justify-between'>{children}</main>
        <footer className='bg-black text-white'>
          <div className='container max-w-screen-xl mx-auto p-8 flex flex-col items-center gap-4'>
            <ul className='flex gap-4'>
              <li>Blog</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>About</li>
            </ul>
            &copy;2023
          </div>
        </footer>
      </body>
    </html>
  );
}
