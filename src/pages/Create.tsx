import { FormEvent, useState } from 'react';
import { useCreatePostMutation } from '../app/features/apiSlice';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

function Create() {
  const navigate = useNavigate();
  const [createPost] = useCreatePostMutation();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const data = {
    title,
    description,
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await createPost(data).unwrap();

      // Handle successful creation, e.g., navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <>
      <Header />
      <Hero title="Create Post" />

      <Form
        data={null}
        onSubmit={handleSubmit}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <Footer />
    </>
  );
}

export default Create;
