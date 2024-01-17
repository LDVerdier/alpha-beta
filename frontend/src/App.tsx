import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { InteractiveAlphabetContainer } from './Alphabets/InteractiveAlphabet';
import { StaticAlphabetContainer } from './Alphabets/StaticAlphabet';
import { Words } from './Words/Words';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StaticAlphabetContainer />,
  },
  {
    path: '/exercice',
    element: <InteractiveAlphabetContainer />,
  },
  {
    path: '/mots',
    element: <Words />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
