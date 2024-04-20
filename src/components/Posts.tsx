import { Link } from 'react-router-dom';
import { PostTypes } from '../types/post.types';
import Loading from './Loading';
import Error from './Error';

interface Props {
  post: PostTypes;
  isLoading: boolean;
  isError: boolean;
}

function Posts({
  post,
  isLoading,
  isError,
}: Props) {
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <>
      <div key={post.id} className="container mx-auto">
        <article className="pt-12 pb-1 border-b border-blue-50">
          <div className="space-y-1 xl:grid xl:grid-cols-12 xl:items-baseline xl:space-y-0">
            <span className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              {post.id}
            </span>
            <div className="space-y-5 xl:col-span-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className=" text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {post.body.slice(0, 200) + ' ....'}
                </div>
              </div>
              <div className="text-base font-medium leading-6">
                <Link
                  to={`/post/${post.id}`}
                  className="text-blue-300 hover:text-blue-900 dark:hover:text-blue-900"
                  aria-label={`Read more: "${post.title}"`}
                  title="Read more"
                  rel="noopener noreferrer">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Posts;
