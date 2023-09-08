import Image from 'next/image';
import Link from 'next/link';

const promotedProducts = [
  { title: 'Iphone 14', imgUrls: '/home/iphone.jpg', price: 999 },
  { title: ' 2E Gaming Anti-blue Black', imgUrls: '/home/glasses.jpg', price: 700 },
  { title: 'Apple Watch Series 8 GPS', imgUrls: '/home/watch.jpg', price: 499 },
  { title: 'Apple AirPods Max', imgUrls: '/home/headphones.jpg', price: 700 },
  { title: 'APPLE TV 4K 128GB Wi-Fi ', imgUrls: '/home/tv.jpg', price: 299 },
  { title: 'Apple iPad Air 10.9" Wi-Fi 64Gb', imgUrls: '/home/tablet.jpg', price: 899 },
];

async function getData(): Promise<string[]> {
  const response = await fetch('https://dummyjson.com/products/categories');

  return response.json();
}

export default async function Home() {
  const categories = await getData();

  return (
    <div className='container p-8 flex flex-col gap-8'>
      <section className='grid grid-cols-4 gap-4'>
        <div className='col-span-3 row-span-2 shadow-md p-6 flex rounded-md'>
          <div className='grow flex flex-col justify-center gap-4 items-start'>
            <h2 className='text-4xl'>MacBook pro</h2>
            <h3 className='text-3xl'>Supercharged for pros</h3>
            <p>From: $2200</p>
            <button className='bg-blue-600 rounded-md hover:bg-blue-700 text-white px-4 py-1 '>Buy</button>
          </div>
          <div>
            <Image src='/home/macbook.jpg' height={500} width={500} alt='Mac book pro' />
          </div>
        </div>
        {promotedProducts.map(({ title, imgUrls, price }, index) => (
          <div key={index} className='shadow-md p-6 flex gap-2 rounded-md'>
            <div className='grow flex flex-col justify-between'>
              <p className='text-sm text-indigo-800 font-medium'>Start from: ${price}</p>
              <h2 className='font-medium'>{title}</h2>
              <Link href='/products' className='text-sm font-medium hover:underline'>
                Buy now
              </Link>
            </div>
            <div className='w-24 h-24'>
              <img src={imgUrls} alt='Iphone' className='w-full h-full object-contain' />
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2 className='text-3xl mb-4'>Categories</h2>
        <div className='grid grid-cols-4 gap-4'>
          {categories.map((item, index) => {
            return (
              <div key={index} className='shadow-md p-6 flex gap-2 rounded-md'>
                <h3 className=' capitalize font-medium'>{item}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
