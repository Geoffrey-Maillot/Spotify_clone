import { spotifyApi } from './client';
/**
 * PLAYLISTS CURRENT USER
 */

export const getCurrentUserPlaylists = (params?: Object): Promise<Object> => {
  return spotifyApi
    .getMe()
    .then((user: any) =>
      spotifyApi.getUserPlaylists(user.id, params && params)
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
  return spotifyApi.getPlaylist(id, params && params);
};

export const getPlaylistCoverImage = (id: string): Promise<Object> => {
  return spotifyApi.getPlaylistCoverImage(id);
};

export const getPlaylistTracks = (id: string, params?: Promise<Object>) => {
  return spotifyApi.getPlaylistTracks(id, params && params);
};

/**
 * PLAYLIST RECOMMANDATION
 */

export const getFeaturedPlaylists = (params?: Object): Promise<Object> => {
  return spotifyApi.getFeaturedPlaylists(params && params);
};

export const getNewReleases = (params?: Object): Promise<Object> => {
  return spotifyApi.getNewReleases(params && params);
};

export const getRecommendations = (params?: Object): Promise<Object> => {
  return spotifyApi.getRecommendations(params && params);
};

export const getAvailableGenreSeeds = (): Promise<Object> => {
  return spotifyApi.getAvailableGenreSeeds();
};
