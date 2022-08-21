import { spotifyApi } from './client';

export const getTopArtistCurrentUser = (params?: Object): Promise<Object> => {
  return spotifyApi.getMyTopArtists(params && params);
};

export const getArtist = (
  artistId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.getArtist(artistId, params && params);
};

export const getArtists = (
  artistIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.getArtists(artistIds, params && params);
};

export const getArtistAlbum = (
  artistId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.getArtistAlbums(artistId, params && params);
};

export const getArtistTopTracks = (
  artistId: string,
  countryId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.getArtistTopTracks(artistId, countryId, params && params);
};

export const getArtistRelatedArtists = (
  artistId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.getArtistRelatedArtists(artistId, params && params);
};
