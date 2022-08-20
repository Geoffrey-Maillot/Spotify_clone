import { useLayoutEffect } from 'react';
// Import Component
import Router from './Router';
import { session } from './service/spotify/Client';

//Todo : Faire une 404
// Todo : Faire un composant pour les headers
// Todo : Pour les headers, conditionner l'image du background ou la couleur et l'image de gauche si il y en une

const App = () => {
  useLayoutEffect(() => {
    session();
  });
  return <Router />;
};

export default App;
