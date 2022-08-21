import { UUID } from '../service/utils/uuid';


//TODO : METTRE le bouton de connexion dans un composant

// == Component =>
const Login = () => {
  const SCOPE_LIST = [
    'user-read-email',
    'user-read-private',
    'ugc-image-upload ',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-follow-modify',
    ' user-follow-read',
    'user-read-recently-played',
    'user-read-playback-position',
    'user-top-read',
    'playlist-read-collaborative',
    'playlist-modify-public ',
    'playlist-read-private',
    'playlist-modify-private',
    'app-remote-control',
    'streaming',
    'user-library-modify',
    'user-library-read',
  ];

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const SCOPE = SCOPE_LIST.join(' ');
  const TYPE = 'token';
  const STATE = UUID(16);
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${TYPE}&state=${STATE}`;

  return (
    <div className=" h-screen grid grid-rows-[auto_1fr]">
  
        <a href={AUTH_URL}>LOGIN</a>

    </div>
  );
};

export default Login;
