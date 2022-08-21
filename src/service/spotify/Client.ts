import { useLayoutEffect } from 'react';
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
      spotifyApi.setAccessToken(localStorage.token);
      localStorage.setItem('token', token);
      authStore.connection();
    }
  });
};

export const getToken = (): string | null => {
  return spotifyApi.getAccessToken();
};
