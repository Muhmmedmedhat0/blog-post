import { Link } from 'react-router-dom';
import { PostTypes } from '../types/post.types';
import Loading from './Loading';
import Error from './Error';


interface Props {
  data: PostTypes;
  isLoading: boolean;
  isError: boolean;
  onDelete: (postId: number) => void;
}

function Post({ data: { id, title, body }, onDelete, isError, isLoading }: Props) {
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  const handleDeleteClick = () => {
    onDelete(id);
  };
  return (
    <div className="container mx-auto">
      <article key={id} className="pt-12 pb-1">
        <div className="space-y-1 xl:grid xl:grid-cols-12 xl:items-baseline xl:space-y-0">
          <span className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            {id}
          </span>
          <div className="space-y-5 xl:col-span-10">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className=" text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
                <div className="flex justify-between items-center space-x-6">
                  <Link
                    to={`/edit/${id}`}
                    className="btn btn-sm btn-outline btn-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </Link>
                  <div
                    className="btn btn-sm btn-outline btn-error"
                    onClick={handleDeleteClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {body}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Post;
