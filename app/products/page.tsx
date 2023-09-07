import { Metadata } from 'next';

type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  brand: string;
};

type Products = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

async function getData(): Promise<Products> {
  const response = await fetch('https://dummyjson.com/products');

  return response.json();
}

export const metadata: Metadata = {
  title: 'Products | E-Commerce',
  description: 'Products page',
};

export default async function Products() {
  const { products, total, skip, limit } = await getData();

  return (
    <div className='container p-8'>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {products.map(({ id, title, description, thumbnail, price, brand }) => {
          return (
            <div key={id} className='rounded-md border-1 border-gray-300 shadow-md overflow-hidden'>
              <div>
                <img src={thumbnail} alt={title} className='object-cover h-48 w-full' />
              </div>
              <div className='p-4 pb-6 flex flex-col gap-2'>
                <h6 className='text-lg font-bold'>{title}</h6>
                <p className='text-gray-500 text-sm'>{brand}</p>
                <p className='text-gray-500 line-clamp-2'>{description}</p>
                <p className='font-semibold'>{price}$</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
