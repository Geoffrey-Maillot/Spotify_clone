import { spotifyApi } from './client';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
/**
 * PLAYLISTS CURRENT USER
 */

export const useGetCurrentUserPlaylists = (params?: Object) => {
  return useInfiniteQuery<SpotifyApi.ListOfUsersPlaylistsResponse, any>(
    ['CurrentUserPlaylists'],
    ({ pageParam }) => {
      return spotifyApi
        .getMe()
        .then((user: any) =>
          spotifyApi.getUserPlaylists(user.id, params || pageParam)
        );
    },
    {
      getNextPageParam: (lastPage: SpotifyApi.ListOfUsersPlaylistsResponse) => {
        return !!lastPage.next && { offset: lastPage.offset + 20 };
      },
    }
  );
};

export const createPlaylist = (
  userId: string,
  params?: Object
): Promise<Object> => {
  return spotifyApi.createPlaylist(userId, params && params);
};

export const changePlaylistDetails = (
  PlaylistId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.changePlaylistDetails(PlaylistId, params && params);
};

export const addTraksToPlaylist = (
  PlaylistId: string,
  uris: Array<string>,
  params?: Object
): Promise<Object> => {
  return spotifyApi.addTracksToPlaylist(PlaylistId, uris, params && params);
};

export const replaceTracksInPlaylist = (
  PlaylistId: string,
  uris: Array<string>
): Promise<Object> => {
  return spotifyApi.replaceTracksInPlaylist(PlaylistId, uris);
};

export const reorderTracksInPlaylist = (
  PlaylistId: string,
  rangeStart: number,
  insertBefore: number,
  params?: Object
): Promise<Object> => {
  return spotifyApi.reorderTracksInPlaylist(
    PlaylistId,
    rangeStart,
    insertBefore,
    params && params
  );
};

export const removeTracksToPlaylist = (
  PlaylistId: string,
  uris: Array<string>
): Promise<Object> => {
  return spotifyApi.removeTracksFromPlaylist(PlaylistId, uris);
};

export const uploadCoverImagePlaylist = (
  playlistId: string,
  imageData: string
): Promise<Object> => {
  return spotifyApi.uploadCustomPlaylistCoverImage(playlistId, imageData);
};

/**
 * PLAYLISTS
 */

export const getPlaylists = (id: string, params?: Object): Promise<Object> => {
  return spotifyApi.getPlaylist(id, params);
};

export const getPlaylistCoverImage = (id: string): Promise<Object> => {
  return spotifyApi.getPlaylistCoverImage(id);
};

export const getPlaylistTracks = (id: string, params?: Promise<Object>) => {
  return spotifyApi.getPlaylistTracks(id, params);
};

/**
 * PLAYLIST RECOMMANDATION
 */

export const useGetFeaturedPlaylists = (params?: Object) => {
  return useQuery<SpotifyApi.ListOfFeaturedPlaylistsResponse, any>(
    ['featuredPlaylists'],
    () => spotifyApi.getFeaturedPlaylists(params)
  );
};

export const getNewRedleases = (params?: Object): Promise<Object> => {
  return spotifyApi.getNewReleases(params);
};

export const useGetRecommendations = (params?: Object) => {
  return useQuery<SpotifyApi.RecommendationsFromSeedsResponse, any>(
    ['recommendations'],
    () => spotifyApi.getRecommendations(params && params)
  );
};

export const useGetAvailableGenreSeeds = () => {
  return useQuery<SpotifyApi.AvailableGenreSeedsResponse, any>(
    ['availableGenreSeeds'],
    () => spotifyApi.getAvailableGenreSeeds()
  );
};
