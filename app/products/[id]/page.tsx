import Image from 'next/image';
import { IProduct } from '../page';
import { url } from 'inspector';
import Link from 'next/link';

type PropsType = {
  params: {
    id: string;
  };
};

async function getData(id: string): Promise<IProduct> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  return response.json();
}

export default async function ProductDetails({ params }: PropsType) {
  const { title, description, brand, price, category, thumbnail, images } = await getData(params.id);

  return (
    <div className='container mx-auto p-8 flex gap-8'>
      <div className='grow'>
        <div className='w-px-96 mb-4'>
          <Image className=' w-full h-full' width={600} height={600} src={thumbnail} alt={title} />
        </div>
        <div className='flex gap-2'>
          {images.map((imgUrl, index) => {
            return (
              <Image key={index} className='rounded object-cover' width={80} height={80} src={imgUrl} alt={title} />
            );
          })}
        </div>
      </div>
      <div className='grow flex flex-col gap-4 items-start p-8'>
        <p className='text-sm text-gray-500'>
          <Link href='/' className='hover:underline'>
            Home
          </Link>{' '}
          /{' '}
          <Link href='/' className='capitalize hover:underline'>
            {category}
          </Link>{' '}
          / <span className='font-medium'>{title}</span>{' '}
        </p>
        <h1 className='text-3xl font-medium'>{title}</h1>
        <p>{brand}</p>
        <p className=''>{description}</p>
        <p className='text-xl font-bold'>${price}</p>

        <button className='bg-blue-600 rounded-md hover:bg-blue-700 text-white px-4 py-1 '>Add to cart</button>
      </div>
    </div>
  );
}
