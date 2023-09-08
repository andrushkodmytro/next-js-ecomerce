import Image from 'next/image';
import { IBlog } from '../page';

interface IComment {
  id: string;
  body: string;
  postId: string;
  user: {
    id: string;
    username: string;
  };
}
interface ICommentsList {
  comments: IComment[];
  total: number;
  skip: number;
  limit: number;
}

async function getData(id: string): Promise<IBlog> {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  return response.json();
}

async function getCommentsData(id: string): Promise<ICommentsList> {
  const response = await fetch(`https://dummyjson.com/comments/post/${id}`);

  return response.json();
}

// https://dummyjson.com/comments/post/5
interface IBlogDetails {
  params: {
    id: string;
  };
}
export default async function BlogDetails({ params }: IBlogDetails) {
  const { title, body, tags } = await getData(params.id);

  const { comments, total } = await getCommentsData(params.id);

  return (
    <div className='container max-w-screen-xl p-8 flex flex-col gap-8'>
      <Image className='w-full h-96 object-cover' src='/blog/blog-1.png' width={500} height={500} alt='' />
      <p>
        {tags.map((tag, index) => (
          <span key={index} className='mr-4 text-sm text-indigo-800 uppercase'>
            {tag}
          </span>
        ))}
      </p>
      <h1 className='text-4xl font-medium mb-4'>{title}</h1>
      <p>{body}</p>

      <h2 className='font-medium'>Comments: {total || 0}</h2>
      <div className='flex flex-col gap-8'>
        {comments.map(({ id, body, user }) => {
          return (
            <div key={id} className='p-8 rounded-md border-1 border-gray-300 shadow-md  flex gap-8'>
              <Image src='/blog/avatar.svg' width={40} height={40} alt='avatar' />
              <div>
                <p className='font-medium'>{user.username}</p>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
