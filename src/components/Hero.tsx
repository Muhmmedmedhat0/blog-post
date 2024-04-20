import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
}

function Hero({ title }: HeroProps) {
  return (
    <div className="container mx-auto">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-t-5">
          <div className="flex justify-between ">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {title}
            </h1>
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                to="/create"
                className=" btn btn-active btn-accent"
                aria-label="All posts">
                Create Post &rarr;
              </Link>
            </div>
          </div>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            A blog created by Muhmmed Medhat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
