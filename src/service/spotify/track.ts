import { spotifyApi } from './client';

/**
 * TRACKS CURRENT USER
 */

//
export const getLikedTracks = (params?: Object): Promise<Object> => {
  return spotifyApi.getMySavedTracks(params && params);
};

export const addToLikedTracks = (
  trackIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.addToMySavedTracks(trackIds, params && params);
};

export const removeFromLikedTracks = (
  trackIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.removeFromMySavedAlbums(trackIds, params && params);
};

export const CheckTracksAreAlreadySaved = (
  trackIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.containsMySavedTracks(trackIds, params && params);
};

export const getTopTracksCurrentUser = (params: Object): Promise<Object> => {
  return spotifyApi.getMyTopTracks(params);
};

export const getRecentlyPlayedTracks = (params: Object): Promise<Object> => {
  return spotifyApi.getMyRecentlyPlayedTracks(params);
};
/**
 * PLAYLISTS
 */
