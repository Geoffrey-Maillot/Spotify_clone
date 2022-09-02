import { spotifyApi } from './client';


export enum Type {
  ALBUM = 'album',
  ARTIST = 'artist',
  PLAYLIST = 'playlist',
  TRACKS = 'track',
}
export const search = (q: string, types: Array<Type>, params?: Object) => {
  return spotifyApi.search(q, types, params && params);
};

export const searchAlbums = (q: string, params?: Object) => {
  return spotifyApi.searchAlbums(q, params && params);
};

export const searchArtists = (q: string, params?: Object) => {
  return spotifyApi.searchArtists(q, params && params);
};

export const searchTracks = (q: string, params?: Object) => {
  return spotifyApi.searchTracks(q, params && params);
};

export const searchPlaylists = (q: string, params?: Object) => {
  return spotifyApi.searchPlaylists(q, params && params);
};

export const searchShows = (q: string, params?: Object) => {
  return spotifyApi.searchShows(q, params && params);
};

export const searchEpisodes = (q: string, params?: Object) => {
  return spotifyApi.searchEpisodes(q, params && params);
};
