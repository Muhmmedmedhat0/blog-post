import { PostTypes } from '../types/post.types';
import Loading from './Loading';
import Error from './Error';
import { FormEvent } from 'react';
import Button from './Button';

interface Props {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onSubmit: (e: FormEvent) => void;
  data?: PostTypes | null;
  isLoading?: boolean;
  isError?: boolean;
}

function Form({
  setTitle,
  setDescription,
  onSubmit,
  isError,
  isLoading,
  data,
}: Props) {
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="container mx-auto">
      <form onSubmit={onSubmit} className="pt-12 pb-1">
        <div className="space-y-1 xl:grid xl:grid-cols-12 xl:items-baseline xl:space-y-0">
          <span className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"></span>
          <div className="space-y-5 xl:col-span-10">
            <div className="space-y-6">
              <input
                className="input input-accent w-full text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100"
                placeholder={data?.title ? data.title : 'Title...'}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="">
                <textarea
                  className="textarea textarea-accent inline-block w-full prose max-w-none text-gray-500 dark:text-gray-400"
                  placeholder={data?.body ? data.body : 'Description...'}
                  rows={7}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end text-base font-medium leading-6">
          <Button className="btn btn-success" type="submit" title="Post" />
        </div>
      </form>
    </div>
  );
}

export default Form;
