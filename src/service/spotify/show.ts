import { spotifyApi } from './client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

/**
 * SHOW CURRENT USER
 */

export const useGetSavedShows = (params?: Object) => {
  return useInfiniteQuery<SpotifyApi.ListOfUsersShowsResponse, any>(
    ['savedShows'],
    ({ pageParam }) => {
      return spotifyApi.getMySavedShows(params || pageParam);
    },
    {
      getNextPageParam: (lastPage: SpotifyApi.ListOfUsersShowsResponse) => {
        return !!lastPage.next && { offset: lastPage.offset + 20 };
      },
    }
  );
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

export const useGetShow = (showId: string, params?: Object) => {
  return useQuery<SpotifyApi.SingleShowResponse, any>(['getShow', showId], () =>
    spotifyApi.getShow(showId, params)
  );
};

export const getShows = (
  showIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.getShows(showIds, params && params);
};
