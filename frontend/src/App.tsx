import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { InteractiveAlphabet } from './Alphabets/InteractiveAlphabet';
import { StaticAlphabet } from './Alphabets/StaticAlphabet';
import { HomePage } from './HomePage';
import { Error404 } from './Layouts/Error404';
import { Layout } from './Layouts/Layout';
import { Words } from './Words/Words';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/alphabet',
    element: (
      <Layout>
        <StaticAlphabet />
      </Layout>
    ),
  },
  {
    path: '/entrainement',
    element: (
      <Layout>
        <InteractiveAlphabet />
      </Layout>
    ),
  },
  {
    path: '/vocabulaire',
    element: (
      <Layout>
        <Words />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <Error404 />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
