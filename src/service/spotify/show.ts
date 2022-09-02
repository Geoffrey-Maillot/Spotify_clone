import { spotifyApi } from './client';

/**
 * SHOW CURRENT USER
 */

export const getSavedShows = (params?: Object): Promise<Object> => {
  return spotifyApi.getMySavedShows(params && params);
};

export const addToSavedShows = (
  showIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.addToMySavedShows(showIds, params && params);
};

export const removeFromSavedShows = (
  showIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.removeFromMySavedShows(showIds, params && params);
};

export const containsSavedShows = (
  showIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.containsMySavedShows(showIds, params && params);
};

/**
 * SHOW
 */

export const getShow = (showId: string, params?: Object): Promise<Object> => {
  return spotifyApi.getShow(showId, params && params);
};

export const getShows = (
  showIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.getShows(showIds, params && params);
};
