import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IBlog {
  id: string;
  title: string;
  body: string;
  userId: string;
  tags: string[];
  reactions: number;
}

interface IBlogList {
  posts: IBlog[];
  total: number;
  skip: number;
  limit: number;
}

async function getData(): Promise<IBlogList> {
  const response = await fetch(`https://dummyjson.com/posts`);

  return response.json();
}

export default async function Blog() {
  const { posts } = await getData();

  return (
    <div className='container max-w-screen-xl p-8'>
      <h1 className='text-3xl font-medium mb-4'>Blog</h1>
      <div className='flex flex-col gap-8'>
        {posts.map(({ id, title, body, tags }) => {
          return (
            <Link
              key={id}
              className='p-8 rounded-md border-1 border-gray-300 shadow-md hover:shadow-lg overflow-hidden flex gap-8'
              href={`/blog/${id}`}
            >
              <Image className=' object-cover' src='/blog/blog-1.png' width={200} height={200} alt={title} />

              <div className='flex flex-col gap-2'>
                <p>
                  {tags.map((tag, index) => (
                    <span key={index} className='mr-4 text-sm text-indigo-800 uppercase'>
                      {tag}
                    </span>
                  ))}
                </p>
                <h2 className='text-2xl'>{title}</h2>
                <p className='line-clamp-4'>{body}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
