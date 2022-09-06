import { spotifyApi } from './client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

/**
 * TRACKS CURRENT USER
 */

export const useGetLikedTracks = (params?: Object) => {
  return useInfiniteQuery<SpotifyApi.UsersSavedTracksResponse, any>(
    ['likedTracks'],
    ({ pageParam }) => {
      return spotifyApi.getMySavedTracks(params || pageParam);
    },
    {
      getNextPageParam: (lastPage: SpotifyApi.UsersSavedTracksResponse) => {
        return lastPage.next && { offset: lastPage.offset + 20 };
      },
    }
  );
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

export const useCheckTracksAreAlreadySaved = (
  trackIds: Array<string>,
  params?: Object
) => {
  return useQuery([
    'checkTracksAreAlreadySaved',
    () => spotifyApi.containsMySavedTracks(trackIds, params),
  ]);
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

export const getTracksAudioFeatures = (
  trackIds: Array<string>
): Promise<Object> => {
  return spotifyApi.getAudioFeaturesForTracks(trackIds);
};

export const getTrackAudioAnalysis = (trackId: string): Promise<Object> => {
  return spotifyApi.getAudioAnalysisForTrack(trackId);
};
