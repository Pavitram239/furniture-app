import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  GalleryPage,
  HomePage,
  ProductsPage,
  ServicesPage,
} from '../src/pages/index';
import Layout from './layout/Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/gallery',
        element: <GalleryPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
