import { spotifyApi } from './client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { next } from './player';

/**
 * USER
 */

export const followUsers = (userIds: Array<string>): Promise<Object> => {
  return spotifyApi.followUsers(userIds);
};

export const unfollowUsers = (userIds: Array<string>): Promise<Object> => {
  return spotifyApi.unfollowUsers(userIds);
};

export const isFollowingUsers = (userIds: Array<string>): Promise<Object> => {
  return spotifyApi.isFollowingUsers(userIds);
};

/**
 * ARTIST
 */

export const useFollowArtists = (artistIds: Array<string>) => {
  return spotifyApi.followArtists(artistIds);
};

export const useUnfollowArtists = (artistIds: Array<string>) => {
  return spotifyApi.unfollowArtists(artistIds);
};

export const useIsFollowingArtists = (artistIds: Array<string>) => {
  return useQuery<SpotifyApi.UserFollowsUsersOrArtistsResponse, any>(
    ['isFollowingArtist', artistIds],
    () => spotifyApi.isFollowingArtists(artistIds)
  );
};

export const useGetFollowedArtist = (params?: Object) => {
  return useInfiniteQuery<SpotifyApi.UsersFollowedArtistsResponse, any>(
    ['followedArtists'],
    ({ pageParam }) => spotifyApi.getFollowedArtists(params || pageParam),
    {
      getNextPageParam: (lastPage: SpotifyApi.UsersFollowedArtistsResponse) => {
        return (
          !!lastPage.artists.next && { after: lastPage.artists.cursors.after }
        );
      },
    }
  );
};

/**
 * PLAYLIST
 */

export const followPlaylist = (
  playlistId: string,
  params: Object
): Promise<Object> => {
  return spotifyApi.followPlaylist(playlistId, params && params);
};

export const unfollowPlaylist = (playlistId: string): Promise<Object> => {
  return spotifyApi.unfollowPlaylist(playlistId);
};

export const areFollowingPlaylist = (
  playlistId: string,
  userIds: Array<string>
): Promise<Object> => {
  return spotifyApi.areFollowingPlaylist(playlistId, userIds);
};
