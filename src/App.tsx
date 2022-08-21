// Import Component
import Router from './Router';
import { useSession } from './service/spotify/client';

//Todo : Faire une 404
// Todo : Faire un composant pour les headers
// Todo : Pour les headers, conditionner l'image du background ou la couleur et l'image de gauche si il y en une

const App = () => {
  useSession();

  return <Router />;
};

export default App;
