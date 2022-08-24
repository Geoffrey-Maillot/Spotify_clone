import { useLayoutEffect } from 'react';

/**
 * spotify-web-api-js :
 *  https://github.com/jmperez/spotify-web-api-js
 *  https://jmperezperez.com/spotify-web-api-js/#src-spotify-web-api.js-constr.prototype.getuser
 */
import Spotify from 'spotify-web-api-js';
import Q from 'q';
import { useStores } from '../../state/storeContext';

export const spotifyApi = new Spotify();

spotifyApi.setPromiseImplementation(Q);

export const useSession = () => {
  const { authStore } = useStores();
  useLayoutEffect(() => {
    if (localStorage.token && localStorage.length > 0) {
      spotifyApi.setAccessToken(localStorage.token);
      authStore.connection();
    } else if (window.location.hash.split('&')[0].split('=')[1]) {
      const token = window.location.hash.split('&')[0].split('=')[1];
      localStorage.setItem('token', token);
      spotifyApi.setAccessToken(token);
      authStore.connection();
    }
  });
};

export const getToken = (): string | null => {
  return spotifyApi.getAccessToken();
};
