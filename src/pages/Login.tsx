import { useEffect } from 'react';

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
  const SHOW_DIALOG = false;
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${TYPE}&state=${STATE}&show_dialog=${SHOW_DIALOG}`;

  useEffect(() => {
    window.location.href = AUTH_URL;
  });

  return (
    <div className="w-scren h-screen flex items-center justify-center">
      <a className=' bg-green-200 hover:bg-green-100 hover:scale-105 transition active:bg-green-300 font-circularBold rounded-full px-6 py-4 text-sm text uppercase tracking-wide' href={AUTH_URL}>Se connecter à spotify</a>
    </div>
  );
};

export default Login;
