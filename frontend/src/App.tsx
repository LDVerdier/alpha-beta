import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { InteractiveAlphabet } from './Alphabets/InteractiveAlphabet';
import { StaticAlphabet } from './Alphabets/StaticAlphabet';
import { Error404 } from './Layouts/Error404';
import { Layout } from './Layouts/Layout';
import { Summary } from './Summary';
import { Words } from './Words/Words';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Summary />
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
    element: <Error404 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
