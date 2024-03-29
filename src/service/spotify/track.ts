import { spotifyApi } from './client';
import { useInfiniteQuery, useQueries } from '@tanstack/react-query';

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

export const useAddToLikedTracks = (trackIds: Array<string>) => {
  return spotifyApi.addToMySavedTracks(trackIds);
};

export const useRemoveFromLikedTracks = (trackIds: Array<string>) => {
  return spotifyApi.removeFromMySavedTracks(trackIds);
};

export const useCheckTracksAreAlreadySaved = (
  trackIds: string[][],
  params?: Object
) => {
  return useQueries({
    queries: trackIds.map((chunk) => {
      return {
        queryKey: ['tracksAreAlreadySaved', chunk],
        queryFn: () => spotifyApi.containsMySavedTracks(chunk, params),
      };
    }),
  });
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
