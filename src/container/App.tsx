import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Create from '../pages/Create';
import NotFound from '../pages/404';
import Edit from '../pages/Edit';
import AllPosts from '../pages/Posts';
const routes = [
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/all-posts',
    element: <AllPosts />,
  },
  {
    path: '/post/:id',
    element: <Post />,
  },
  {
    path: '/create',
    element: <Create />,
  },
  // Edit
  {
    path: '/edit/:id',
    element: <Edit />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
