import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | E-Commerce',
  description: 'About page',
};

export default function About() {
  return <div className='container mx-auto p-8'>About page</div>;
}
