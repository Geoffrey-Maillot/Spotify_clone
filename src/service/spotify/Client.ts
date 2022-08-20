import Q from 'q';
import Spotify from 'spotify-web-api-js';
import auth from '../../state/auth';

export const spotifyApi = new Spotify();

spotifyApi.setPromiseImplementation(Q);

export const session = () => {
  if (localStorage.token && localStorage.length > 0) {
    spotifyApi.setAccessToken(localStorage.token);
    auth.connection();
  } else if (window.location.hash.split('&')[0].split('=')[1]) {
    const token = window.location.hash.split('&')[0].split('=')[1];
    spotifyApi.setAccessToken(localStorage.token);
    localStorage.setItem('token', token);
    auth.connection();
  }
};
