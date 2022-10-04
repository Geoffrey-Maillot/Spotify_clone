// Import Component
import Spinner from 'component/Spinner/Spinner';
import Router from 'Router';
import { useSession } from './service/spotify/client';
import { useGetCurrentUser } from 'service/spotify/user';
import { AUTH_URL } from 'pages/Login';
import { Navigate } from 'react-router-dom';

//Todo : Faire une 404
// Todo : Faire un composant pour les headers
// Todo : Pour les headers, conditionner l'image du background ou la couleur et l'image de gauche si il y en une

const App = () => {
  const { error, isError, isLoading } = useGetCurrentUser();
  
  if (isError) {
  <Navigate to='/login'/>
}
  if (isError && error.response.includes('token')) {
    localStorage.removeItem('token');
    window.location.href = AUTH_URL;
  }


  useSession();

  if ( isLoading) return <Spinner />;

  return <Router />;
};

export default App;