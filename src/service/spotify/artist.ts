import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { spotifyApi } from './client';

export const getTopArtistCurrentUser = (params?: Object): Promise<Object> => {
  return spotifyApi.getMyTopArtists(params && params);
};

export const useGetArtist = (artistId: string, params?: Object) => {
  return useQuery(['getArtist', artistId], () =>
    spotifyApi.getArtist(artistId, params)
  );
};

export const getArtists = (
  artistIds: Array<string>,
  params: Object
): Promise<Object> => {
  return spotifyApi.getArtists(artistIds, params && params);
};

export const useGetArtistAlbum = (artistId: string, params?: Object) => {
  return useInfiniteQuery<SpotifyApi.ArtistsAlbumsResponse, any>(
    ['getArtistAlbum'],
    ({ pageParam }) =>
      spotifyApi.getArtistAlbums(artistId, params || pageParam),
    {
      getNextPageParam: (lastPage: SpotifyApi.ArtistsAlbumsResponse) => {
        return !!lastPage.next && { offest: lastPage.offset + 20 };
      },
    }
  );
};

export const useGetArtistTopTracks = (
  artistId: string,
  countryId: string,
  params?: Object
) => {
  return useQuery<SpotifyApi.ArtistsTopTracksResponse, any>(
    ['getArtistTopTracks', artistId],
    () => spotifyApi.getArtistTopTracks(artistId, countryId, params)
  );
};

export const useGetArtistRelatedArtists = (
  artistId: string,
  params: Object
) => {
  return useQuery(['artistRelatedArtists', artistId], () =>
    spotifyApi.getArtistRelatedArtists(artistId, params)
  );
};
