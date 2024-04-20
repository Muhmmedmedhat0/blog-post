import Posts from '../components/Posts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { useGetPostsQuery } from '../app/features/apiSlice';
import { Link } from 'react-router-dom';

function Home() {
  const { data, isLoading, isError } = useGetPostsQuery('posts');

  return (
    <>
      <Header />
      <Hero title="Latest Posts" />
      <div className="container mx-auto">
        {data &&
          data
            .slice(0, 5)
            .map((post) => (
              <Posts
                post={post}
                isLoading={isLoading}
                isError={isError}
                key={post.id}
              />
            ))}
        <div className="flex justify-end text-base font-medium leading-6 mt-4">
          <Link
            to="/all-posts"
            className=" btn btn-active btn-primary"
            aria-label="All posts">
            All Posts &rarr;
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
