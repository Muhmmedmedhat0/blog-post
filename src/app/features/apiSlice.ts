import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './axios';
import { PostTypes } from '../../types/post.types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'} ),
  endpoints: (builder) => ({
    // getPosts
    getPosts: builder.query<PostTypes[], string>({
      query: () => ({ method: 'GET', url: 'posts' }),
    }),
    // getPost
    getPost: builder.query<PostTypes, string>({
      query: (id) => ({ method: 'GET', url: `posts/${id}` }),
    }),
    // updatePost
    updatePost: builder.mutation<PostTypes, Partial<PostTypes> & Pick<PostTypes, 'id'>>({
      query: ({ id, ...data }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    // deletePost
    deletePost: builder.mutation<void, number>({
      query: (id) => ({ 
        method: 'DELETE',
        url: `posts/${id}`
      }),
    }),
    // createPost
    createPost: builder.mutation<PostTypes, Partial<PostTypes>>({
      query: (data) => ({
        url: `posts`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useGetPostQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useCreatePostMutation,
} = apiSlice;
