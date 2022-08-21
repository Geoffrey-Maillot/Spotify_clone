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
