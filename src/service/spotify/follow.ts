import { spotifyApi } from './client';

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

export const followArtists = (artistIds: Array<string>): Promise<Object> => {
  return spotifyApi.followArtists(artistIds);
};

export const unfollowArtists = (artistIds: Array<string>): Promise<Object> => {
  return spotifyApi.unfollowArtists(artistIds);
};

export const isFollowingArtists = (
  artistIds: Array<string>
): Promise<Object> => {
  return spotifyApi.isFollowingArtists(artistIds);
};

export const getFollowedArtist = (params?: Object): Promise<Object> => {
  return spotifyApi.getFollowedArtists(params && params);
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
