import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import {
  useGetPostQuery,
  useUpdatePostMutation,
} from '../app/features/apiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { FormEvent, useState } from 'react';
import Form from '../components/Form';
function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, isLoading } = useGetPostQuery(id!);
  const [updatePost] = useUpdatePostMutation();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const postData = {
        id: Number(id),
        title,
        description,
      };

      await updatePost(postData).unwrap();
      // Handle successful creation, e.g., navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <>
      <Header />
      <Hero title="Update Post" />
      {data ? (
        <Form
          data={data}
          isLoading={isLoading}
          isError={isError}
          setTitle={setTitle}
          setDescription={setDescription}
          onSubmit={handleSubmit}
        />
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}

export default Edit;
