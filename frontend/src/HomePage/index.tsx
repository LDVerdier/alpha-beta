import axios from 'axios';
import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    (async () => {
      const helloWorld = await axios.get(import.meta.env.VITE_BACKEND_URL);
      console.info(helloWorld.data);
    })();
  }, []);

  return <div>Bienvenue sur Alpha Beta !</div>;
};
