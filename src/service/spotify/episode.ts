import { spotifyApi, spotifyUrlApi } from './client';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetShowEpisodes = (showId: string, params?: Object) => {
  return useInfiniteQuery(
    ['showEpisode', showId],
    ({ pageParam }) => spotifyApi.getShowEpisodes(showId, params || pageParam),
    {
      getNextPageParam: (lastPage) => {
        return !!lastPage.next && { offset: lastPage.offset + 20 };
      },
    }
  );
};

export const getEpisode = (
  episodeId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.getEpisode(episodeId, params && params);
};

export const getEpisodes = (
  episodeIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.getEpisodes(episodeIds, params && params);
};

export const useGetMyEpisodes = () => {
  return useInfiniteQuery<any, any>(
    ['myEpisodes'],
    ({ pageParam = { offset: 0, limit: 20 } }) => {
      return spotifyApi.getGeneric(
        `${spotifyUrlApi}/me/episodes?offset=${pageParam.offset}&limit=${pageParam.limit}`
      );
    },
    {
      getNextPageParam: (lastPage: any) => {
        return lastPage.next && { offset: lastPage.offset + 20 };
      },
    }
  );
};
