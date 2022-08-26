import { useQuery } from '@tanstack/react-query';

// Import Component
import Router from './Router';
import { useSession } from './service/spotify/client';
import { UseGetCurrentUser } from './service/spotify/user';
import { AUTH_URL } from './pages/Login';

//Todo : Faire une 404
// Todo : Faire un composant pour les headers
// Todo : Pour les headers, conditionner l'image du background ou la couleur et l'image de gauche si il y en une

const App = () => {
  const { error, isError } = UseGetCurrentUser();

  if (isError && error.response.includes('token')) {
    localStorage.removeItem('token');
    window.location.href = AUTH_URL;
  }

  useSession();

  return <Router />;
};

export default App;
