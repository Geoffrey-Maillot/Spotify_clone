import { spotifyApi, spotifyUrlApi } from './client';
import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query';

//! les Méthodes pour ajouter / retirer un episode ne sont pas fournis pas le spotifySDK
//! Le getGeneric ne fonctionne que sur la route "get"

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

export const useGetEpisode = (episodeId: string, params?: Object) => {
  return useQuery(['getEpisode', episodeId], () =>
    spotifyApi.getEpisode(episodeId, params)
  );
};

export const getEpisodes = (
  episodeIds: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.getEpisodes(episodeIds, params);
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

export const useCheckEpisodeAreAlreadySaved = (trackIds: Array<string>) => {
  return useQueries({
    queries: trackIds.map((chunk) => {
      return {
        queryKey: ['episodesAreAlreadySaved', chunk],
        queryFn: () =>
          spotifyApi.getGeneric(
            `${spotifyUrlApi}/me/episodes/contains?ids=${chunk}`
          ),
      };
    }),
  });
};
