import { spotifyApi } from './Client';

export const authUserPlaylist = () => {
  return spotifyApi.getUserPlaylists();
};

export const authuser = () => {
  return spotifyApi.getMe();
};
