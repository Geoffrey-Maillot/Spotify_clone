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
