import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | E-Commerce',
  description: 'About page',
};

const teamMember: { name: string; position: string; imgUrl: string }[] = [
  { name: 'Diana Johan', position: 'Designer', imgUrl: '/about/photo-1.avif' },
  { name: 'Alberta Flores', position: 'Manager', imgUrl: '/about/photo-2.avif' },
  { name: 'Damian Smith', position: 'Seller', imgUrl: '/about/photo-3.avif' },
  { name: 'Michel Noa', position: 'Seller', imgUrl: '/about/photo-4.avif' },
];

const advantages: { title: string; text: string; imgUrl: string }[] = [
  {
    title: 'Support',
    text: 'Deliver help content anywhere on your website, in your app or via chat. Accessibility is key',
    imgUrl: '/about/support.png',
  },
  {
    title: 'Discount',
    text: 'Enjoy exclusive discounts, member-only deals, and special perks',
    imgUrl: '/about/discount.png',
  },
  {
    title: 'Diversity',
    text: 'As time went on, I realized these ‘diverse’ stories are not enough',
    imgUrl: '/about/diversity.png',
  },
];

export default function About() {
  return (
    <div className='container max-w-screen-xl mx-auto px-12 py-20 flex flex-col gap-12'>
      <h1 className='text-4xl font-medium text-center'>About us</h1>
      <section className='flex lg:flex-row flex-col gap-4 items-center lg:items-start'>
        <div className='flex-1'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita temporibus eveniet dignissimos, dicta
            quidem at officia! Dicta obcaecati, suscipit assumenda commodi sed nisi quia repellat optio sequi inventore
            ea quis in cum nesciunt eos ipsa voluptatum! Adipisci, labore reiciendis? Aliquam, rerum. Iusto assumenda ab
            eligendi officiis rerum. Itaque explicabo temporibus officiis consectetur dolorem ullam cumque, natus veniam
            magnam repellat molestiae odit quos neque, iure voluptatum voluptates commodi in blanditiis quasi
            perspiciatis quis ea praesentium! Laboriosam assumenda dignissimos animi architecto porro tempore atque
            culpa dolor cupiditate nam, expedita quo nobis, voluptatibus unde autem. Maxime atque animi voluptatum,
            praesentium dolore recusandae eius?
          </p>
        </div>
        <div className='flex-1'>
          <Image className='rounded' src='/about/team-1.jpg' height={390} width={632} alt='Alt' />
        </div>
      </section>
      <section className='grid gap-4 grid-cols-2 lg:grid-cols-4 grid-rows-2 h-[400px]'>
        <div className='lg:col-span-2 lg:row-span-2 relative'>
          <Image className='object-cover rounded' src='/about/team-2.webp' fill alt='Alt' />
        </div>
        <div className='relative'>
          <Image className='object-cover rounded' src='/about/team-3.webp' fill alt='Alt' />
        </div>
        <div className='relative'>
          <Image className='object-cover rounded' src='/about/team-4.webp' fill alt='Alt' />
        </div>
        <div className='lg:col-span-2 relative'>
          <Image className='object-cover rounded' src='/about/team-5.avif' fill alt='Alt' />
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>Our team</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ducimus quis repellendus vero illo non debitis,
            doloremque doloribus eaque ullam recusandae, corporis culpa nulla autem? Iusto deleniti excepturi amet
            facere!
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {teamMember.map(({ name, position, imgUrl }, index) => {
            return (
              <div key={index}>
                <div className='relative h-[300px] sm:h-[250px] mb-2'>
                  <Image className='object-cover rounded' src={imgUrl} fill alt='team' />
                </div>
                <p className='text-center font-semibold'>{name}</p>
                <p className='text-center text-gray-500'>{position}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className='flex flex-col md:flex-row gap-8'>
        {advantages.map(({ title, text, imgUrl }, index) => {
          return (
            <div
              key={index}
              className='grow shrink-0 basis-2/4 md:basis-0 flex-wrap md:flex-nowrap bg-gray-300 flex flex-col items-center gap-4 p-8 rounded'
            >
              <Image src={imgUrl} width={100} height={100} alt={title} />
              <h3 className='text-2xl font-medium'>{title}</h3>
              <p className='text-center'>{text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
