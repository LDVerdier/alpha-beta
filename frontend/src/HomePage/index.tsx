import axios from 'axios';
import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    (async () => {
      console.info('vite env', import.meta.env);
      console.info('vite backend url', import.meta.env.VITE_BACKEND_URL);
      const helloWorld = await axios.get(import.meta.env.VITE_BACKEND_URL);
      console.info(helloWorld.data);
    })();
  }, []);

  return <div>Bienvenue sur Alpha Beta !</div>;
};
