import { spotifyApi } from './client';

/**
 * TRACKS CURRENT USER
 */

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

export const getTopTracksCurrentUser = (params?: Object): Promise<Object> => {
  return spotifyApi.getMyTopTracks(params && params);
};

export const getRecentlyPlayedTracks = (params?: Object): Promise<Object> => {
  return spotifyApi.getMyRecentlyPlayedTracks(params && params);
};

/**
 * TRACK
 */

export const getTrack = (trackId: string, params?: Object): Promise<Object> => {
  return spotifyApi.getTrack(trackId, params && params);
};

export const getTracks = (
  trackIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.getTracks(trackIds, params && params);
};

export const getTrackAudioFeatures = (trackId: string): Promise<Object> => {
  return spotifyApi.getAudioFeaturesForTrack(trackId);
};

export const getTracksAudioFeatures = (trackIds: Array<string>): Promise<Object> => {
  return spotifyApi.getAudioFeaturesForTracks(trackIds);
};

export const getTrackAudioAnalysis = (trackId: string): Promise<Object> => {
  return spotifyApi.getAudioAnalysisForTrack(trackId);
};
