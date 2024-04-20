import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import {
  useGetPostQuery,
  useDeletePostMutation,
} from '../app/features/apiSlice';
import SinglePost from '../components/Post';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

function Blog() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostQuery(id!);
  const naigate = useNavigate();
  const [deletePost] = useDeletePostMutation();

  const handleDelete = async (postId: number) => {
    try {
      await deletePost(postId).unwrap();
      // Handle successful deletion, e.g., navigate to home page
      naigate('/');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <>
      <Header />
      <Hero title="Single Post" />
      {data ? (
        <SinglePost
          data={data}
          onDelete={handleDelete}
          isLoading={isLoading}
          isError={isError}
        />
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}

export default Blog;
