import { spotifyApi } from './client';

/**
 * ALBUM CURRENT USER
 */

export const getMySavedAlbums = (params?: Object): Promise<Object> => {
  return spotifyApi.getMySavedAlbums(params && params);
};

export const addToMySavedAlbums = (
  albumIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.addToMySavedAlbums(albumIds, params && params);
};

export const removeFromMySavedAlbums = (
  albumIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.removeFromMySavedAlbums(albumIds, params && params);
};

export const CheckAlbumsAreAlreadySaved = (
  albumsIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.containsMySavedAlbums(albumsIds, params && params);
};

/**
 * ALBUM
 */

export const getAlbum = (albumId: string, params?: Object): Promise<Object> => {
  return spotifyApi.getAlbum(albumId, params && params);
};

export const getAlbumTracks = (
  albumId: string,
  params?: Object
): Promise<Object> => {
  return spotifyApi.getAlbumTracks(albumId, params && params);
};

export const getAlbums = (
  albumIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.getAlbums(albumIds, params && params);
};
