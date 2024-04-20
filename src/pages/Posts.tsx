import  { useState, useMemo } from 'react';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { useGetPostsQuery } from '../app/features/apiSlice';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

function AllPosts() {
  const { data, isLoading, isError } = useGetPostsQuery('posts');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

  // Filter posts by title
  const filteredPosts = useMemo(
    () =>
      data?.filter((post) =>
        post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
      ) || [],
    [data, debouncedSearchTerm],
  );

  // Determine postsPerPage based on search
  const postsPerPage = debouncedSearchTerm ? filteredPosts.length : 10;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = useMemo(
    () => filteredPosts.slice(indexOfFirstPost, indexOfLastPost),
    [filteredPosts, indexOfFirstPost, indexOfLastPost],
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Debounce the search term
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearchTerm(value);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  };

  return (
    <>
      <Header />
      <Hero title="All Posts" />
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      {currentPosts.map((post) => (
        <Posts
          key={post.id}
          post={post}
          isLoading={isLoading}
          isError={isError}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        paginate={paginate}
        debouncedSearchTerm={debouncedSearchTerm}
        indexOfLastPost={indexOfLastPost}
        filteredPostsLength={filteredPosts.length}
      />
      <Footer />
    </>
  );
}

export default AllPosts;
