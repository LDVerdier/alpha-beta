import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { InteractiveAlphabetContainer } from './Alphabets/InteractiveAlphabet';
import { StaticAlphabetContainer } from './Alphabets/StaticAlphabet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StaticAlphabetContainer />,
  },
  {
    path: '/exercice',
    element: <InteractiveAlphabetContainer />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
